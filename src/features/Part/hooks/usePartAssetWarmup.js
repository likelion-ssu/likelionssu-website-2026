const partAssetModules = {
  ...import.meta.glob("../assets/**/*.svg", {
    eager: true,
    import: "default",
  }),
  ...import.meta.glob("../assets/**/*.webp", {
    eager: true,
    import: "default",
  }),
};

const ASSETS_BY_PART = Object.entries(partAssetModules).reduce(
  (acc, [path, src]) => {
    // 슬라이더는 저용량 webp로 교체했기 때문에 기존 거대 svg는 워밍업에서 제외.
    if (path.includes("-slide-") && path.endsWith(".svg")) {
      return acc;
    }

    // 동일 이름의 webp가 있으면 svg 프리로드는 건너뜀(대용량 원본 다운로드 방지).
    if (path.endsWith(".svg")) {
      const webpPairPath = path.replace(/\.svg$/, ".webp");
      if (partAssetModules[webpPairPath]) {
        return acc;
      }
    }

    if (path.includes("/pm/")) {
      acc.pm.push(src);
      return acc;
    }
    if (path.includes("/de/")) {
      acc.de.push(src);
      return acc;
    }
    if (path.includes("/fe/")) {
      acc.fe.push(src);
      return acc;
    }
    if (path.includes("/be/")) {
      acc.be.push(src);
      return acc;
    }

    acc.common.push(src);
    return acc;
  },
  { pm: [], de: [], fe: [], be: [], common: [] },
);

const warmedAssetSet = new Set();
const inflightAssetSet = new Set();

function preloadAsset(src) {
  if (!src || warmedAssetSet.has(src) || inflightAssetSet.has(src)) return;

  inflightAssetSet.add(src);
  const image = new Image();
  image.decoding = "async";
  image.fetchPriority = "low";

  const finalize = () => {
    warmedAssetSet.add(src);
    inflightAssetSet.delete(src);
  };

  image.onload = finalize;
  image.onerror = () => inflightAssetSet.delete(src);
  image.src = src;

  if (typeof image.decode === "function") {
    image.decode().then(finalize).catch(() => {});
  }
}

export function warmPartAssets(
  partKey,
  { immediateCount = 4, batchSize = 2, batchDelayMs = 80 } = {},
) {
  const normalizedKey = String(partKey || "").toLowerCase();
  const partAssets = ASSETS_BY_PART[normalizedKey] ?? [];
  const targets = [...new Set([...ASSETS_BY_PART.common, ...partAssets])];

  if (targets.length === 0) return () => {};

  targets.slice(0, immediateCount).forEach(preloadAsset);

  let cursor = immediateCount;
  let timerId = null;
  let idleId = null;
  let cancelled = false;

  const runBatch = () => {
    if (cancelled) return;

    const nextBatch = targets.slice(cursor, cursor + batchSize);
    nextBatch.forEach(preloadAsset);
    cursor += batchSize;

    if (cursor < targets.length) scheduleNextBatch();
  };

  const scheduleNextBatch = () => {
    if (cancelled) return;

    if (typeof window !== "undefined" && "requestIdleCallback" in window) {
      idleId = window.requestIdleCallback(runBatch, { timeout: 500 });
      return;
    }

    timerId = window.setTimeout(runBatch, batchDelayMs);
  };

  scheduleNextBatch();

  return () => {
    cancelled = true;

    if (timerId !== null) window.clearTimeout(timerId);
    if (
      idleId !== null &&
      typeof window !== "undefined" &&
      "cancelIdleCallback" in window
    ) {
      window.cancelIdleCallback(idleId);
    }
  };
}
