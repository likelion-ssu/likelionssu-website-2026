import React from "react";
import pm2 from "../../assets/pm/pm-2.webp";
import pm3 from "../../assets/pm/pm-3.webp";
import grid from "../../assets/grid-left.svg";
import camera from "../../assets/pm/camera.svg";

export default function PmContent() {
  return (
    <div className="relative w-full sm:w-screen overflow-x-hidden flex flex-col items-center min-h-[58rem] pb-[2.68rem]">

      {/* GRID (viewport 기준 고정) */}
      <div
        className="
          absolute bottom-0 left-0
          w-screen flex justify-start pointer-events-none z-0
        "
        style={{
          background:
            "linear-gradient(225deg, #F9F8F5 29.01%, rgba(249, 248, 245, 0.00) 100%)",
        }}
      >
        <img
          src={grid}
          alt="grid"
          className="
            w-[14.15625rem] h-[14.28125rem] object-cover
            sm:w-[28.3125rem] sm:h-[28.5625rem]
          "
        />
      </div>

      {/* 모바일 hr (그대로 유지) */}
      <hr className="w-full mb-[3rem] border-t-[0.7px] border-line sm:hidden relative z-10" />

      {/* 웹 hr (viewport 오른쪽 벽 기준 고정) */}
      <div className="hidden sm:block absolute  top-0 right-0 w-[44.5rem] border-t-[0.7px] border-line z-10" />

      {/* =======================
          CONTENT (중앙 정렬 영역)
      ======================= */}
      <div className="relative w-full sm:w-[90rem] flex flex-col justify-start items-start gap-[2.75rem] z-10">

        <div className="relative w-full px-[1.19rem] sm:px-0 z-10">

          {/* 웹 */}
          <div className="hidden sm:block w-full relative">

            <div className="absolute top-0 left-[7.25rem] flex flex-col items-start gap-[1.25rem]">
              <img src={pm2} alt="pm2" className="w-[25.5625rem]" />
              <p className="typo-small1">유승빈 김이나 장민영 박현지</p>
            </div>

            <div className="absolute top-[4.94rem] left-[calc(7.25rem+25.5625rem+4.69rem)] flex flex-col gap-[1.25rem]">
              <div className="typo-pretitle1k">파트장 한마디</div>
              <p className="typo-body2 whitespace-pre-line">
                {`일을 하다 보면 속도가 결정적인 순간이 있습니다.
동시에, 무엇을 선택하고 무엇을 버릴지의 판단이 결과를 바꾸는 순간도 있습니다.

저는 팀의 모든 선택이 완벽할 수는 없다고 생각합니다.
그래서 더 빠르게 결정하고,
필요하다면 빠르게 수정할 수 있는 기준을 만드는 것이 중요하다고 생각합니다.`}
              </p>
            </div>

            <div className="absolute top-[27.06rem] left-[14.81rem]">
              <div className="typo-subtitlek text-text/30">PM이 고민된다면?</div>
              <div className="typo-pretitle1k pt-[0.88rem]">이런 사람에게 추천해요</div>
              <p className="typo-body2 pt-[1.25rem] whitespace-pre-wrap">
                {`아직 모든 답을 알고 있진 않아도,
사용자 한 명의 불편함에는 끝까지 이유를 묻고 싶은 분

개발이나 디자인을 완벽히 알진 못하지만,
그래서 더 많이 묻고 배우는 걸 두려워하지 않는 분

AI를 자주 써보며 ‘이걸 어떻게 하면
제품 경험으로 만들 수 있을까’를 계속 고민해보는 분`}
              </p>
            </div>

            {/* PM3 이미지 */}
            <div className="z-1 absolute top-[23.62rem] right-[6.69rem] flex flex-col items-end gap-[1.25rem]">
              <img src={pm3} alt="pm3" className="h-[25.5625rem]" />
              <p className="typo-small1">유승빈 김이나 장민영 박현지</p>
            </div>

            {/* 웹 Camera */}
            <img
              src={camera}
              alt="camera"
              className="absolute z-0 swing-diagonal
                         right-[9.5rem] top-[15.62rem] w-[11.875rem] h-[8rem]"
            />
          </div>

          {/* 모바일 */}
          <div className="sm:hidden flex flex-col gap-[2.75rem] w-full">

            <div className="flex flex-col gap-[1.19rem]">
              <div className="typo-pretitle1k">파트장 한마디</div>
              <p className="typo-body2 whitespace-pre-wrap">
                {`일을 하다 보면 속도가 결정적인 순간이 있습니다.
동시에, 무엇을 선택하고 무엇을 버릴지의 판단이 결과를 
바꾸는 순간도 있습니다.

저는 팀의 모든 선택이 완벽할 수는 없다고 생각합니다.
그래서 더 빠르게 결정하고,
필요하다면 빠르게 수정할 수 있는 기준을 만드는 것이 중요하다고 생각합니다.`}
              </p>
            </div>

            {/* pm2 + camera */}
            <div className="flex flex-col items-end gap-[0.81rem]">
              <div className="relative w-full">
                <img src={pm2} alt="pm2" className="w-full relative z-10" />

                <img
                  src={camera}
                  alt="camera"
                  className="absolute z-0 swing-diagonal
                             right-[2.57rem] top-[-6.1rem]
                             w-[6rem] h-[8.1rem]"
                />
              </div>

              <p className="typo-small1">유승빈 김이나 장민영 박현지</p>
            </div>

            <div>
              <div className="typo-subtitlek text-text/30">PM이 고민된다면?</div>
              <div className="typo-pretitle1k pt-[0.88rem]">이런 사람에게 추천해요</div>
              <p className="typo-body2 pt-[1.19rem] whitespace-pre-wrap">
                {`아직 모든 답을 알고 있진 않아도,
사용자 한 명의 불편함에는 끝까지 이유를 묻고 싶은 분

개발이나 디자인을 완벽히 알진 못하지만,
그래서 더 많이 묻고 배우는 걸 두려워하지 않는 분

AI를 자주 써보며 ‘이걸 어떻게 하면
제품 경험으로 만들 수 있을까’를 계속 고민해보는 분`}
              </p>
            </div>

            {/* pm3 */}
            <div className="flex flex-col items-end gap-[0.81rem]">
              <img src={pm3} alt="pm3" className="w-full" />
              <p className="typo-small1">유승빈 김이나 장민영 박현지</p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
