import React, { useRef, useEffect } from "react";
import { ROADMAP_ACTIVITIES_FLAT } from "../../../data/about";

/** 사진 크기 1: 144×108 */
const IMG_SIZE_1 = { width: 144, height: 108 };
/** 사진 크기 2: 144×184 */
const IMG_SIZE_2 = { width: 144, height: 184 };

/** 비선택 활동 사진 위에 깔 동그라미 패턴 오버레이 (SVG 패턴 기반) */
// viewBox를 작게 만들어 간격 조절 (viewBox 6x6 = 간격이 더 좁아짐)
// 원 크기(r)는 동일하게 유지하면 원 크기는 그대로, 간격만 좁아짐
const dotPatternOverlaySvg = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='6' height='6' viewBox='0 0 6 6'%3E%3Ccircle cx='3' cy='3' r='2.7' fill='white' opacity='1'/%3E%3C/svg%3E`;

const dotPatternOverlayStyle = {
  backgroundImage: `url("${dotPatternOverlaySvg}")`,
  backgroundSize: '4px 4px', // SVG width/height와 동일하게
  backgroundRepeat: 'repeat',
};

const RENDER_ACTIVITY_RANGE = 3;
const PRELOAD_ACTIVITY_RANGE = 4;

/**
 * 왼쪽 고정 사진 영역.
 * 활동마다 이미지 3장을 세로로 나열하고, activeIndex에 따라 슬라이딩.
 * 홀수번째: [크기1, 크기2, 크기1], 짝수번째: [크기2, 크기1, 크기2]
 * 중앙에 하얀색 박스, 첫 활동 위에 빈 공간.
 */
export default function ActivityVisual({ activeIndex, scrollToIndex, onScrollChange, onReachEnd }) {
  const activities = ROADMAP_ACTIVITIES_FLAT;
  const containerRef = useRef(null);
  const scrollContainerRef = useRef(null);
  const activityElementsRef = useRef([]);
  const isScrolling = useRef(false);

  // 현재 활성 인덱스 주변 활동 이미지만 선로딩
  useEffect(() => {
    const start = Math.max(0, activeIndex - PRELOAD_ACTIVITY_RANGE);
    const end = Math.min(activities.length - 1, activeIndex + PRELOAD_ACTIVITY_RANGE);

    for (let i = start; i <= end; i += 1) {
      activities[i]?.images?.forEach((src) => {
        if (!src) return;
        const img = new Image();
        img.decoding = "async";
        img.fetchPriority = "low";
        img.src = src;
      });
    }
  }, [activeIndex, activities]);

  // 각 활동 컨테이너의 크기 (가로 배열)
  const ACTIVITY_WIDTH = 560; // 이미지 3개를 감싸는 컨테이너 너비
  const ACTIVITY_HEIGHT = IMG_SIZE_2.height; // 가장 큰 이미지 높이 = 184px
  
  // 활동 컨테이너 간 gap
  const ACTIVITY_GAP = 60; // 60px

  // 오른쪽 클릭 시 왼쪽 사진 스크롤 (scrollToIndex가 변경되면 실행)
  useEffect(() => {
    if (scrollToIndex === null || scrollToIndex === undefined) return;
    
    const container = scrollContainerRef.current;
    const targetElement = activityElementsRef.current[scrollToIndex];
    
    if (!container || !targetElement) return;

    isScrolling.current = true;

    const containerRect = container.getBoundingClientRect();
    const targetRect = targetElement.getBoundingClientRect();
    const containerCenter = containerRect.height / 2;
    const targetCenter = targetRect.height / 2;
    
    // 타겟 요소를 중앙에 배치
    const scrollTo = container.scrollTop + (targetRect.top - containerRect.top) - containerCenter + targetCenter;
    
    container.scrollTo({
      top: scrollTo,
      behavior: 'smooth',
    });

    // 스크롤 완료 후 플래그 해제
    const timeoutId = setTimeout(() => {
      isScrolling.current = false;
      // 푸터만 동기화 (클릭으로 이동한 인덱스가 끝인지 여부)
      onReachEnd?.(scrollToIndex === activities.length - 1);
    }, 500);

    return () => clearTimeout(timeoutId);
    // scrollToIndex 변경 시에만 실행 (onReachEnd 포함 시 부모 리렌더마다 스크롤 재실행됨)
  }, [scrollToIndex]); // eslint-disable-line react-hooks/exhaustive-deps

  // 실시간 반응형 스크롤 엔진 (수동 계산 + rAF)
  const lastReportedIndexRef = useRef(-1);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const updateActive = () => {
      if (isScrolling.current) return;

      const containerRect = container.getBoundingClientRect();
      const viewportCenter = containerRect.top + containerRect.height / 2;

      let closestIndex = 0;
      let minDistance = Infinity;

      activityElementsRef.current.forEach((el, index) => {
        if (!el) return;

        const rect = el.getBoundingClientRect();
        const elementCenter = rect.top + rect.height / 2;
        const distance = Math.abs(viewportCenter - elementCenter);

        if (distance < minDistance) {
          minDistance = distance;
          closestIndex = index;
        }
      });

      if (closestIndex !== lastReportedIndexRef.current) {
        lastReportedIndexRef.current = closestIndex;
        onScrollChange?.(closestIndex);
        onReachEnd?.(closestIndex === activities.length - 1);
      }
    };

    let frameId;
    const onScroll = () => {
      cancelAnimationFrame(frameId);
      frameId = requestAnimationFrame(updateActive);
    };

    container.addEventListener("scroll", onScroll, { passive: true });
    updateActive();

    return () => {
      container.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frameId);
    };
  }, [activities.length, onScrollChange, onReachEnd]);

  // 휠 이벤트: 끝단에서만 페이지로 전파, 그 외에는 전파만 막고 네이티브 scroll-snap에 맡김
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleWheel = (e) => {
      const { scrollTop, scrollHeight, clientHeight } = container;
      const isAtTop = scrollTop <= 0;
      const isAtBottom = scrollTop + clientHeight >= scrollHeight - 1;

      if ((isAtTop && e.deltaY < 0) || (isAtBottom && e.deltaY > 0)) {
        return;
      }

      e.stopPropagation();
    };

    container.addEventListener("wheel", handleWheel, { passive: true });
    return () => container.removeEventListener("wheel", handleWheel);
  }, []);

  return (
    <div 
      ref={containerRef}
      className="relative h-full w-full flex items-center justify-center bg-secondarybrand overflow-hidden"
    >
      {/* 중앙 하얀색 박스 (고정) */}
      <div
        className="absolute top-1/2 -translate-y-1/2 bg-light pointer-events-none"
        style={{
          left: 'calc(50% - ' + (ACTIVITY_WIDTH / 2 + 14) + 'px)',
          right: 0,
          height: (ACTIVITY_HEIGHT + 28) + 'px',
          paddingTop: '14px',
          paddingBottom: '14px',
          paddingLeft: '14px',
        }}
      />

      {/* 스크롤 가능한 사진 컨테이너 */}
      <div
        ref={scrollContainerRef}
        className="absolute inset-0 overflow-y-auto overflow-x-hidden [&::-webkit-scrollbar]:hidden"
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          scrollSnapType: 'y mandatory',
          scrollBehavior: 'smooth',
        }}
      >
        {/* 첫 활동을 중앙에 배치하기 위한 상단 여백 */}
        <div style={{ height: 'calc(50vh - ' + (ACTIVITY_HEIGHT / 2) + 'px)' }} />

        {/* 모든 활동 이미지 세트 */}
        <div
          className="flex flex-col items-center"
          style={{ paddingBottom: 'calc(50vh - ' + (ACTIVITY_HEIGHT / 2) + 'px)' }}
        >
          {activities.map((activity, activityIndex) => {
            const isOdd = activityIndex % 2 === 0;
            const sizeClasses = isOdd
              ? [IMG_SIZE_1, IMG_SIZE_2, IMG_SIZE_1]
              : [IMG_SIZE_2, IMG_SIZE_1, IMG_SIZE_2];

            return (
              <div
                key={activity.id}
                ref={(el) => {
                  activityElementsRef.current[activityIndex] = el;
                }}
                className="flex flex-row justify-between items-end"
                style={{ 
                  marginBottom: ACTIVITY_GAP + 'px',
                  width: ACTIVITY_WIDTH + 'px',
                  height: ACTIVITY_HEIGHT + 'px',
                  scrollSnapAlign: 'center',
                  scrollSnapStop: 'always',
                }}
                data-activity-index={activityIndex}
              >
                {activity.images?.slice(0, 3).map((src, imgIndex) => {
                  const size = sizeClasses[imgIndex];
                  const isSelectedActivity = activityIndex === activeIndex;
                  const shouldRenderImage =
                    Math.abs(activityIndex - activeIndex) <= RENDER_ACTIVITY_RANGE;
                  return (
                    <div
                      key={imgIndex}
                      className="relative overflow-hidden bg-emptyimg shrink-0 flex items-center justify-center"
                      style={{
                        width: size.width + 'px',
                        height: size.height + 'px',
                      }}
                    >
                      {shouldRenderImage && (
                        <img
                          src={src}
                          alt=""
                          className="w-full h-full object-cover"
                          loading={isSelectedActivity ? "eager" : "lazy"}
                          decoding="async"
                          fetchPriority={isSelectedActivity ? "high" : "low"}
                        />
                      )}
                      {/* 동그라미 패턴 오버레이 (GPU 가속) */}
                      <div
                        className="absolute inset-0 pointer-events-none transition-opacity duration-150 ease-out"
                        style={{
                          ...dotPatternOverlayStyle,
                          opacity: isSelectedActivity ? 0 : 1,
                          willChange: "opacity",
                        }}
                        aria-hidden
                      />
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
