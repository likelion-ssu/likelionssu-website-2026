import { useState } from "react";

/**
 * About 페이지 활성 활동 상태 관리 훅
 * - 왼쪽 사진 스크롤 시 오른쪽 활동 선택 변경
 * - 오른쪽 활동 클릭 시 왼쪽 사진 스크롤
 * 
 * @returns {Object} { 
 *   activeIndex: 현재 활성화된 활동 인덱스,
 *   setActiveIndex: 활동 인덱스 설정 함수
 * }
 */
export function useAboutScroll() {
  const [activeIndex, setActiveIndex] = useState(0);

  return {
    activeIndex,
    setActiveIndex,
  };
}
