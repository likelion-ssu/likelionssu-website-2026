const warmedImageSet = new Set();
const inflightImageSet = new Set();

function preloadImage(src) {
  if (!src || warmedImageSet.has(src) || inflightImageSet.has(src)) return;

  inflightImageSet.add(src);

  const image = new Image();
  image.decoding = "async";
  image.fetchPriority = "low";

  const markWarmed = () => {
    warmedImageSet.add(src);
    inflightImageSet.delete(src);
  };

  image.onload = markWarmed;
  image.onerror = () => inflightImageSet.delete(src);
  image.src = src;

  if (typeof image.decode === "function") {
    image.decode().then(markWarmed).catch(() => {});
  }
}

export function warmImageCache(
  imageSources,
  { immediateCount = 6, batchSize = 4, batchDelayMs = 120 } = {},
) {
  const uniqueSources = [...new Set(imageSources.filter(Boolean))];
  if (uniqueSources.length === 0) return () => {};

  uniqueSources.slice(0, immediateCount).forEach(preloadImage);

  let cursor = immediateCount;
  let timerId = null;
  let idleId = null;
  let cancelled = false;

  const runBatch = () => {
    if (cancelled) return;

    const nextBatch = uniqueSources.slice(cursor, cursor + batchSize);
    nextBatch.forEach(preloadImage);
    cursor += batchSize;

    if (cursor >= uniqueSources.length) return;
    scheduleNextBatch();
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

