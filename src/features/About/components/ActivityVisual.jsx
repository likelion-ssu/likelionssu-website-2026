import React, { useRef, useEffect } from "react";
import { ROADMAP_ACTIVITIES_FLAT } from "../../../data/about";

/** 사진 크기 1: 144×108 */
const IMG_SIZE_1 = { width: 144, height: 108 };
/** 사진 크기 2: 144×184 */
const IMG_SIZE_2 = { width: 144, height: 184 };

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
    setTimeout(() => {
      isScrolling.current = false;
    }, 500);
  }, [scrollToIndex]);

  // 스크롤 감지 및 중앙 활동 계산
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const containerRect = container.getBoundingClientRect();
          const containerCenter = containerRect.top + containerRect.height / 2;

          // 중앙에 가장 가까운 활동 찾기
          let closestIndex = 0;
          let closestDistance = Infinity;

          activityElementsRef.current.forEach((element, index) => {
            if (!element) return;
            
            const rect = element.getBoundingClientRect();
            const elementCenter = rect.top + rect.height / 2;
            const distance = Math.abs(containerCenter - elementCenter);

            if (distance < closestDistance) {
              closestDistance = distance;
              closestIndex = index;
            }
          });

          if (onScrollChange && closestIndex !== activeIndex && !isScrolling.current) {
            onScrollChange(closestIndex);
          }

          // 마지막 활동에 도달했는지 체크
          const isAtLastActivity = closestIndex === activities.length - 1;
          if (onReachEnd) {
            onReachEnd(isAtLastActivity);
          }

          ticking = false;
        });

        ticking = true;
      }
    };

    container.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      container.removeEventListener('scroll', handleScroll);
    };
  }, [activeIndex, onScrollChange, onReachEnd, activities.length]);

  // 휠 이벤트 제어
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleWheel = (e) => {
      const { scrollTop, scrollHeight, clientHeight } = container;
      const isAtTop = scrollTop === 0;
      const isAtBottom = scrollTop + clientHeight >= scrollHeight - 1;

      // 최상단에서 위로 스크롤 또는 최하단에서 아래로 스크롤할 때만 페이지 스크롤 허용
      if ((isAtTop && e.deltaY < 0) || (isAtBottom && e.deltaY > 0)) {
        return;
      }

      // 그 외의 경우 페이지 스크롤 방지
      e.preventDefault();
      e.stopPropagation();

      // 컨테이너 내부 스크롤 (scroll-snap과 호환)
      container.scrollBy({
        top: e.deltaY,
        behavior: 'auto' // scroll-snap이 부드럽게 처리함
      });
    };

    container.addEventListener("wheel", handleWheel, { passive: false });
    return () => {
      container.removeEventListener("wheel", handleWheel);
    };
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
                  return (
                    <div
                      key={imgIndex}
                      className="relative overflow-hidden bg-emptyimg shrink-0 flex items-center justify-center"
                      style={{
                        width: size.width + 'px',
                        height: size.height + 'px',
                      }}
                    >
                      <img
                        src={src}
                        alt=""
                        className="w-full h-full object-cover"
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
