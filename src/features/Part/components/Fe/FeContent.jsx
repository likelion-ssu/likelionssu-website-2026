import React from "react";
import fe2 from "../../assets/fe/fe-2.svg";
import fe3 from "../../assets/fe/fe-3.svg";
import grid from "../../assets/grid-left.svg";
import cap from "../../assets/fe/cap.svg";

export default function FeContent() {
  return (
    <div className="relative w-full overflow-x-hidden flex flex-col justify-end items-start gap-[2.75rem] min-h-[53.1875rem] pb-[2.68rem]">

      {/* grid */}
      <div
        className="absolute bottom-0 left-0 w-[14.15625rem] h-[14.28125rem]
                   sm:w-[28.3125rem] sm:h-[28.5625rem]
                   z-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(225deg, #F9F8F5 29.01%, rgba(249, 248, 245, 0.00) 100%)",
        }}
      >
        <img src={grid} alt="grid" className="w-full h-full object-cover" />
      </div>

      {/* =======================
          모바일용 hr
      ======================= */}
      <hr className="w-full border-t-[0.7px] border-line sm:hidden relative z-10" />

      {/* 웹용 hr */}
      <hr className="hidden sm:block absolute top-[1.6rem] right-0 w-[44.5rem] border-t-[0.7px] border-line z-10" />

      {/* =======================
          컨텐츠 wrapper
      ======================= */}
      <div className="relative w-full px-[1.19rem] sm:px-0 z-10">

        {/* =======================
            웹 레이아웃
        ======================= */}
        <div className="hidden sm:flex w-full justify-center">
          <div className="w-[72.3125rem] mt-[3.19rem] flex flex-col items-start gap-[2.25rem]">

            <div className="flex flex-row justify-start items-center gap-[4.38rem]">

              {/* fe2 이미지 블록 */}
              <div className="relative flex flex-col items-start gap-[1.25rem]">

                {/* cap (웹) */}
                <img
                  src={cap}
                  alt="cap"
                  className="absolute left-[-7rem] top-[-6.62rem] h-[11.6875rem] z-50 pointer-events-none"
                />

                <img src={fe2} alt="fe2" className="w-[25.5625rem]" />
                <p className="typo-small1">최다예 하유경 이정안 서해승</p>
              </div>

              {/* 파트장 한마디 */}
              <div className="flex flex-col gap-[1.25rem]">
                <div className="typo-pretitle1k">파트장 한마디</div>
                <p className="typo-body2 whitespace-pre-line">
                  {`안녕하세요 프론트엔드 파트장 서해승입니다.
시각적인 UI를 설계하고 생동감 있는 사용자 경험을 만드는 프론트엔드는
개발 분야 중에서도 가장 트렌디하고 매력적인 파트라고 자부합니다!

저희 파트는 Zero to One으로, 함께 고민하고 서비스를 완성해 나가는 과정을 지향하고 있습니다.
그렇기 때문에, ‘할 수 있을까?’라는 걱정보다는 ‘하고 싶다!’는열정 하나면 충분합니다.

저와 함께 프론트엔드를 최강으로 만들 아기사자분들의 지원 기다리고 있겠습니다!`}
                </p>
              </div>
            </div>

            {/* 추천 블록 */}
            <div className="flex flex-row justify-start items-center gap-[4.38rem]">

              {/* fe3 이미지 블록 */}
              <div className="flex flex-col items-start gap-[1.25rem]">
                <img src={fe3} alt="fe3" className="h-[20.6875rem]" />
                <p className="typo-small1">최다예 하유경 이정안 서해승</p>
              </div>

              <div>
                <div className="typo-subtitlek text-text/30">FE가 고민된다면?</div>
                <div className="typo-pretitle1k pt-[0.88rem]">
                  이런 사람에게 추천해요
                </div>

                <p className="typo-body2 pt-[1.25rem] whitespace-pre-wrap">
                  {`프론트엔드 개발자라는 꿈을 향해 첫발을 내딛고 싶으신 분

사용자 경험의 최전선에서 서비스의 시작부터 끝까지 내 손으로 만들어나가고 싶으신 분

FE 개발을 배우고 싶은 열정은 가득하지만, 어디서부터 시작할지 막막하셨던 분

열정 넘치는  아기사자 동료들과 함께 치열하게 고민하고 성장하고 싶으신 분`}
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* =======================
            모바일 레이아웃
        ======================= */}
        <div className="sm:hidden flex flex-col gap-[2.75rem] w-full">

          {/* 파트장 한마디 */}
          <div className="flex flex-col gap-[1.19rem]">
            <div className="typo-pretitle1k">파트장 한마디</div>

            <p className="typo-body2 whitespace-pre-wrap">
              {`안녕하세요 프론트엔드 파트장 서해승입니다.
시각적인 UI를 설계하고 생동감 있는 사용자 경험을
만드는 프론트엔드는 개발 분야 중에서도 가장 트렌디하고 매력적인 파트라고 자부합니다!

저희 파트는 Zero to One으로, 함께 고민하고 서비스를 완성해 나가는 과정을 지향하고 있습니다.
그렇기 때문에, ‘할 수 있을까?’라는 걱정보다는
‘하고 싶다!’는 열정 하나면 충분합니다.

저와 함께 프론트엔드를 최강으로 만들
아기사자분들의 지원 기다리고 있겠습니다!`}
            </p>
          </div>

          {/* fe2 이미지 */}
          <div className="relative flex flex-col items-end gap-[0.81rem]">

            {/* cap (모바일) */}
            <img
              src={cap}
              alt="cap"
              className="absolute left-[-2.88rem] top-[-3.31rem] h-[5.84375rem] z-50 pointer-events-none"
            />

            <img src={fe2} alt="fe2" className="w-full" />
            <p className="typo-small1">최다예 하유경 이정안 서해승</p>
          </div>

          {/* 추천 블록 */}
          <div>
            <div className="typo-subtitlek text-text/30">FE가 고민된다면?</div>
            <div className="typo-pretitle1k pt-[0.88rem]">
              이런 사람에게 추천해요
            </div>

            <p className="typo-body2 pt-[1.19rem] whitespace-pre-wrap">
              {`프론트엔드 개발자라는 꿈을 향해 첫발을 내딛고 싶으신 분

사용자 경험의 최전선에서 서비스의 시작부터 끝까지
내 손으로 만들어나가고 싶으신 분

FE 개발을 배우고 싶은 열정은 가득하지만,
어디서부터 시작할지 막막하셨던 분

열정 넘치는  아기사자 동료들과 함께
치열하게 고민하고 성장하고 싶으신 분`}
            </p>
          </div>

          {/* fe3 이미지 */}
          <div className="flex flex-col items-end gap-[0.81rem]">
            <img src={fe3} alt="fe3" className="w-full" />
            <p className="typo-small1">최다예 하유경 이정안 서해승</p>
          </div>
        </div>

      </div>
    </div>
  );
}
