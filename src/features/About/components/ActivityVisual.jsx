import React from "react";
import { ROADMAP_ACTIVITIES_FLAT } from "../../../data/about";

/**
 * 왼쪽 고정 사진 영역.
 * activeIndex에 따라 슬라이딩 로직은 다음 단계에서 framer-motion으로 구현 예정.
 * activities = data/about.js 의 ROADMAP_ACTIVITIES_FLAT (한 활동당 이미지 3장)
 */
export default function ActivityVisual({ activeIndex }) {
  const activities = ROADMAP_ACTIVITIES_FLAT;

  return (
    <div className="relative h-full w-full flex items-center justify-center bg-[#020202] overflow-hidden">
      {/* 추후: activities 길이만큼 세로 나열 + translateY(activeIndex) 애니메이션 */}
      <div className="text-white/50 typo-bodye1 text-center px-4">
        <p>Activity Visual</p>
        <p className="mt-2">
          activeIndex: {activeIndex} / {activities.length}
        </p>
      </div>
    </div>
  );
}
