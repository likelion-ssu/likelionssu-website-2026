export const RECRUIT_PART_SCROLL_RESTORE_KEY =
  "recruit:part:return-scroll-y";
export const RECRUIT_SCROLL_RESTORE_LOCK_KEY =
  "recruit:part:return-scroll-lock";

export function saveRecruitPartScroll(scrollY) {
  if (typeof window === "undefined") return;
  window.sessionStorage.setItem(
    RECRUIT_PART_SCROLL_RESTORE_KEY,
    String(scrollY),
  );
}

export function getRecruitPartScroll() {
  if (typeof window === "undefined") return null;

  const raw = window.sessionStorage.getItem(RECRUIT_PART_SCROLL_RESTORE_KEY);
  if (raw === null) return null;

  const parsed = Number(raw);
  if (!Number.isFinite(parsed)) return null;

  return parsed;
}

export function clearRecruitPartScroll() {
  if (typeof window === "undefined") return;
  window.sessionStorage.removeItem(RECRUIT_PART_SCROLL_RESTORE_KEY);
}

export function setRecruitScrollRestoreLock(locked) {
  if (typeof window === "undefined") return;

  if (locked) {
    window.sessionStorage.setItem(RECRUIT_SCROLL_RESTORE_LOCK_KEY, "1");
  } else {
    window.sessionStorage.removeItem(RECRUIT_SCROLL_RESTORE_LOCK_KEY);
  }
}

export function isRecruitScrollRestoreLocked() {
  if (typeof window === "undefined") return false;
  return window.sessionStorage.getItem(RECRUIT_SCROLL_RESTORE_LOCK_KEY) === "1";
}
