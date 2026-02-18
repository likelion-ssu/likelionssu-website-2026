import React, { useEffect, useState } from "react";
import { ROADMAP_ITEMS } from "../../../data/roadmap";
import loadingcircle from "../assets/RoadmapSection_circle.svg";
import circleSelected from "../assets/RoadmapSection_circle_selected.svg";

export default function RoadmapSection() {
  const [selectedNode, setSelectedNode] = useState("회원선발");
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" && window.innerWidth < 1024,
  );

  const selectedContent = ROADMAP_ITEMS.find(
    (i) => i.id === selectedNode,
  )?.content;

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // 모바일/PC별 뷰박스 크기 분리
  const SVG_WIDTH = isMobile ? 400 : 900;
  const SVG_HEIGHT = isMobile ? 380 : 600; // 500 → 380

  const CENTER_X = SVG_WIDTH / 2;
  const CENTER_Y = SVG_HEIGHT / 2;
  const RADIUS_X = isMobile ? 165 : 340;
  const RADIUS_Y = isMobile ? 130 : 220;
  const viewBox = `0 0 ${SVG_WIDTH} ${SVG_HEIGHT}`;
  const START_ANGLE = -Math.PI / 2; // 12시 방향부터 시작

  // 노드 위치 계산
  const getNodePosition = (index, total = ROADMAP_ITEMS.length) => {
    const angle = START_ANGLE + (index / total) * 2 * Math.PI;
    const x = CENTER_X + RADIUS_X * Math.cos(angle);
    const y = CENTER_Y + RADIUS_Y * Math.sin(angle);
    return { x, y, angle };
  };

  // 적당히 둥근 곡선 경로 생성
  const generateSmoothPath = () => {
    const total = ROADMAP_ITEMS.length;
    const points = [];

    // 모든 노드의 좌표 수집
    for (let i = 0; i < total; i++) {
      const { x, y } = getNodePosition(i, total);
      points.push({ x, y });
    }

    let path = `M ${points[0].x} ${points[0].y}`;

    for (let i = 0; i < points.length - 1; i++) {
      const p0 = points[Math.max(0, i - 1)];
      const p1 = points[i];
      const p2 = points[i + 1];
      const p3 = points[Math.min(points.length - 1, i + 2)];

      // tension을 적당하게 조정
      const tension = 0.8;

      const cp1x = p1.x + ((p2.x - p0.x) / 5) * tension;
      const cp1y = p1.y + ((p2.y - p0.y) / 5) * tension;
      const cp2x = p2.x - ((p3.x - p1.x) / 5) * tension;
      const cp2y = p2.y - ((p3.y - p1.y) / 5) * tension;

      path += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${p2.x} ${p2.y}`;
    }

    return path;
  };

  return (
    <section
      id="roadmap-section"
      className="flex flex-col w-full min-h-[32rem] bg-secondarybrand pt-[4rem] pb-[4rem] lg:pt-[10rem] lg:pb-[10rem]"
    >
      {/* 섹션 타이틀 "Our Annual Roadmap" - 모바일 subtitlee / PC pretitle1e */}
      <h2 className="text-primarybrand text-center px-4 pt-6 pb-[2.5rem] lg:pb-4">
        <span className="typo-subtitlee lg:hidden">Our Annual Roadmap</span>
        <span className="hidden lg:block typo-pretitle1e">
          Our Annual Roadmap
        </span>
      </h2>

      {/* 하단: 로드맵 + 콘텐츠 (PC: 가로 / 모바일: 세로) */}
      <div className="flex flex-1 flex-col lg:flex-row">
        {/* 좌측: 로드맵 (노드 + 연결선) -*/}
        <div className="relative flex-1 min-h-[24rem] lg:min-h-[32rem] flex items-center justify-center px-0 lg:px-5 py-0 lg:py-3">
          <div
            className={`relative w-full mx-auto ${
              isMobile
                ? "aspect-[4/3.8]" // ← 모바일 높이 키워줌
                : "max-w-[52rem] aspect-[9/6]"
            }`}
          >
            {/* SVG 컨테이너 */}
            <svg
              viewBox={viewBox}
              className="absolute inset-0 w-full h-full"
              preserveAspectRatio="xMidYMid meet"
            >
              {/* 곡선 경로 */}
              <path
                d={generateSmoothPath()}
                fill="none"
                stroke="#000000"
                strokeWidth={isMobile ? "0.4" : "0.5"}
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              {/* 노드들 */}
              {ROADMAP_ITEMS.map((item, index) => {
                const { x, y } = getNodePosition(index);
                const isSelected = selectedNode === item.id;

                const fw = isMobile ? 120 : 95;
                const fh = isMobile ? 80 : 55;
                return (
                  <g key={item.id}>
                    <foreignObject
                      x={x - fw / 2}
                      y={y - fh / 2}
                      width={fw}
                      height={fh}
                    >
                      <div className="w-full h-full flex items-center justify-center">
                        <button
                          type="button"
                          onClick={() => setSelectedNode(item.id)}
                          className={`
                          ${isMobile ? "w-[4.375rem] h-[3.125rem] p-[0.4rem] gap-[0rem]" : "w-[5.9375rem] min-w-[5.9375rem] max-w-[5.9375rem] h-[3.4375rem] min-h-[3.4375rem] max-h-[3.4375rem] p-[0.625rem] gap-[0.3rem]"}
                          flex justify-center items-center box-border
                          rounded-[1.25rem] lg:rounded-[1.875rem]
                          border-[0.0313rem] border-text lg:border-[0.0313rem]
                          text-center overflow-hidden
                          ${isMobile ? "typo-small1" : "typo-recruit-roadmap"} text-text cursor-pointer
                          transition-colors
                          ${isSelected ? "bg-primarybrand text-white font-bold border-none" : "bg-light hover:bg-[#FFFFFF] hover:border-primarybrand hover:text-primarybrand"}
                        `}
                        >
                          {item.labelLines ? (
                            <span
                              className={`flex flex-col justify-center leading-tight ${
                                isSelected
                                  ? isMobile
                                    ? "typo-small1-medium"
                                    : "typo-recruit-roadmap-medium"
                                  : isMobile
                                    ? "typo-small1"
                                    : "typo-recruit-roadmap"
                              }`}
                            >
                              {item.labelLines.map((line, i) => (
                                <span key={i}>{line}</span>
                              ))}
                            </span>
                          ) : (
                            <span
                              className={`${
                                isSelected
                                  ? isMobile
                                    ? "typo-small1-medium"
                                    : "typo-recruit-roadmap-medium"
                                  : isMobile
                                    ? "typo-small1"
                                    : "typo-recruit-roadmap"
                              } whitespace-nowrap`}
                            >
                              {item.label}
                            </span>
                          )}

                          {item.hasAsterisk && (
                            <img
                              src={isSelected ? circleSelected : loadingcircle}
                              alt=""
                              className="w-[0.6639rem] h-[0.6639rem] ml-1 shrink-0"
                            />
                          )}
                        </button>
                      </div>
                    </foreignObject>
                  </g>
                );
              })}
            </svg>

            {/* 중앙 로딩 서클 - 회전 애니메이션 (모바일 1.2071rem / PC 2rem) */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[1.2071rem] h-[1.2071rem] lg:w-8 lg:h-8 pointer-events-none">
              <img
                src={loadingcircle}
                alt=""
                className="w-full h-full animate-[spin_2s_linear_infinite]"
              />
            </div>
          </div>
        </div>

        {/* 우측/아래: 콘텐츠 패널 */}
        <div className="w-full lg:w-[35rem] shrink-0 px-4 pt-0 pb-3 lg:px-0 lg:pr-8 lg:py-8 bg-secondarybrand flex flex-col justify-center">
          {/* 모바일 */}
          <div className="space-y-4 lg:hidden">
            <div className="space-y-2">
              <h2 className="typo-cardtextk text-text font-bold">
                {selectedContent?.title ?? "로드맵"}
              </h2>
              <p className="typo-bodyk1 text-text leading-relaxed break-keep">
                {selectedContent?.description ?? ""}
              </p>
            </div>
            {selectedContent?.images && (
              <div className="flex gap-[0.38rem]">
                {selectedContent.images.map((src, index) => (
                  <div
                    key={`mo-img-${index}`}
                    className="flex-1 min-w-0 aspect-[116/68] overflow-hidden"
                  >
                    <img
                      src={src}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* PC */}
          <div className="hidden lg:block space-y-4">
            <h2 className="typo-cardtextk text-text">
              {selectedContent?.title ?? "로드맵"}
            </h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="w-full h-[10rem] flex flex-col justify-center space-y-2 p-0">
                <p className="typo-bodyk1 text-text leading-relaxed">
                  {selectedContent?.description ?? ""}
                </p>
              </div>
              {selectedContent?.images && (
                <div className="w-full h-[10rem] overflow-hidden bg-gray-300">
                  <img
                    src={selectedContent.images[0]}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
            </div>
            {selectedContent?.images && (
              <div className="grid grid-cols-2 gap-4">
                <div className="w-full h-[10rem] overflow-hidden bg-gray-300">
                  <img
                    src={selectedContent.images[1]}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-full h-[10rem] overflow-hidden bg-gray-300">
                  <img
                    src={selectedContent.images[2]}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
