import React from "react";
import value1Icon from "../assets/ValueSection_value1.svg";
import value2Icon from "../assets/ValueSection_value2.svg";
import value3Icon from "../assets/ValueSection_value3.svg";
import buttonIcon from "../assets/ValueSection_buttonImg.svg";

const APPLY_URL = "#"; // 14기 지원 링크로 교체

export default function ValueSection() {
  return (
    <section
      id="value-section"
      className="scroll-mt-[8rem] bg-secondarybrand w-full px-4 sm:px-[3.75rem]"
    >
      {/* 타이틀 - 모바일 subtitlee / PC pretitle1e */}
      <h2 className="text-center text-primarybrand mb-12 sm:mb-16">
        <span className="typo-subtitlee sm:hidden">What We Value</span>
        <span className="hidden sm:block typo-pretitle1e">What We Value</span>
      </h2>

      {/* 밸류 카드 3개 - min-width로 애매한 해상도에서도 고정 */}
      <div className="flex flex-col sm:flex-row sm:flex-wrap sm:justify-center gap-6 sm:gap-[1.16rem] max-w-[85rem] mx-auto mb-14 sm:mb-20">
        {/* 열정 */}
        <article className="flex-1 sm:min-w-[17rem] bg-light px-4 py-4 sm:px-5 sm:py-5 flex flex-col">
          <div className="flex items-center justify-center h-[11rem] sm:h-[12rem]">
            <img
              src={value1Icon}
              alt=""
              className="max-w-[10.5rem] max-h-[10rem] sm:max-w-[13rem] sm:max-h-[12rem] object-contain"
            />
          </div>
          <div className="mt-4 flex items-end gap-5 sm:gap-4">
            <h3 className="typo-subtitlek text-text w-[2.75rem] sm:w-[3.25rem] shrink-0 mb-1 sm:mb-2">
              열정
            </h3>
            <div className="flex-1 min-w-0 text-text min-h-[2.75rem] sm:min-h-[3.25rem] flex flex-col justify-end">
              <p className="typo-small2 sm:hidden">
                모든 불은 아주 작은 불씨에서 시작된다.
              </p>
              <p className="typo-small2 sm:hidden">
                멈추지 않는 질문 하나가, 아직 이름 없는 열을 만든다.
              </p>
              <p className="hidden sm:block typo-body2">
                모든 불은 아주 작은 불씨에서 시작된다.
              </p>
              <p className="hidden sm:block typo-body2">
                멈추지 않는 질문 하나가, 아직 이름 없는 열을 만든다.
              </p>
            </div>
          </div>
        </article>

        {/* 책임 */}
        <article className="flex-1 sm:min-w-[17rem] bg-light px-4 py-4 sm:px-5 sm:py-5 flex flex-col">
          <div className="flex items-center justify-center h-[11rem] sm:h-[12rem]">
            <img
              src={value2Icon}
              alt=""
              className="max-w-[10.5rem] max-h-[10rem] sm:max-w-[13rem] sm:max-h-[12rem] object-contain"
            />
          </div>
          <div className="mt-4 flex items-end gap-5 sm:gap-4">
            <h3 className="typo-subtitlek text-text w-[2.75rem] sm:w-[3.25rem] shrink-0 mb-1 sm:mb-2">
              책임
            </h3>
            <div className="flex-1 min-w-0 text-text min-h-[2.75rem] sm:min-h-[3.25rem] flex flex-col justify-end">
              <p className="typo-small2 sm:hidden">
                작은 불씨에서 태어나, 세상을 바꾸는 흐름으로
              </p>
              <p className="typo-small2 sm:hidden">확장된다.</p>
              <p className="hidden sm:block typo-body2">
                작은 불씨에서 태어나, 세상을 바꾸는 흐름으로
              </p>
              <p className="hidden sm:block typo-body2">확장된다.</p>
            </div>
          </div>
        </article>

        {/* 능동 */}
        <article className="flex-1 sm:min-w-[17rem] bg-light px-4 py-4 sm:px-5 sm:py-5 flex flex-col">
          <div className="flex items-center justify-center h-[11rem] sm:h-[12rem]">
            <img
              src={value3Icon}
              alt=""
              className="max-w-[10.5rem] max-h-[10rem] sm:max-w-[13rem] sm:max-h-[12rem] object-contain"
            />
          </div>
          <div className="mt-4 flex items-end gap-5 sm:gap-4">
            <h3 className="typo-subtitlek text-text w-[2.75rem] sm:w-[3.25rem] shrink-0 mb-1 sm:mb-2">
              능동
            </h3>
            <div className="flex-1 min-w-0 text-text min-h-[2.75rem] sm:min-h-[3.25rem] flex flex-col justify-center pt-3">
              <p className="typo-small2 sm:hidden">
                열정으로 시작해, 끝내 영향이 된다.
              </p>
              <p className="hidden sm:block typo-body2">
                열정으로 시작해, 끝내 영향이 된다.
              </p>
            </div>
          </div>
        </article>
      </div>

      {/* 하단 RECRUIT 버튼 - PC: 2번째 레이아웃 / 모바일: 3번째 레이아웃 */}
      <div className="flex justify-center items-center w-full max-w-[83.40625rem] mx-auto">
        <a
          href={APPLY_URL}
          className="w-full max-w-[26.5rem] sm:max-w-[31rem]
             flex items-center justify-center gap-3
             text-light px-[1.64rem] sm:px-[1.5rem]
             border border-light sm:border-0 bg-black
             hover:opacity-90 transition-opacity"
        >
          <span className="typo-cardtexte sm:hidden">RECRUIT -</span>
          <span className="hidden sm:block typo-subtitlee">RECRUIT -</span>
          <img
            src={buttonIcon}
            alt=""
            className="h-[2.8125rem] sm:h-[3.7711rem] object-contain px-[1rem] sm:px-[2rem]"
          />
          <span className="typo-buttontextbold sm:hidden">
            14기 지원하러 가기
          </span>
          <span className="hidden sm:block typo-recruit-button ">
            14기 지원하러 가기
          </span>
        </a>
      </div>
    </section>
  );
}
