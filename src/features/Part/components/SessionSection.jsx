import React from "react";
import { sessionVersions } from "../../../data/sessions";
import gridright from "../assets/grid-right.svg";

export default function SessionSection({ version = "pm" }) {
  const sessionData = sessionVersions[version];

  return (
    <div className="relative w-full flex flex-col pt-[3.375rem] sm:pt-[6.81rem]">

      {/* 모바일 */}
      <hr className="z-10 sm:hidden absolute top-0 left-0 w-screen border-t-[0.7px] border-line" />

      {/* 웹 */}
      <div className="z-10 hidden sm:flex absolute top-[0rem] left-1/2 -translate-x-1/2 w-screen justify-end pointer-events-none">
        <hr className="w-[44.5rem] border-t-[0.7px] border-line" />
      </div>

      <div className="hidden sm:flex absolute top-0 sm:left-1/2 sm:-translate-x-1/2 w-screen justify-end pointer-events-none">
        <img
          src={gridright}
          alt="grid"
          className="w-[13.875rem] h-[14.09375rem] sm:w-[27.75rem] sm:h-[28.1875rem] object-cover"
        />
      </div>
      <div className="sm:hidden absolute top-0 right-0 pointer-events-none z-0">
        <img
          src={gridright}
          alt="grid"
          className="w-[13.875rem] h-[14.09375rem] sm:w-[27.75rem] sm:h-[28.1875rem] object-cover"
        />
      </div>


      {/* 컨텐츠 wrapper */}
      <div className="z-10 w-full flex flex-col sm:flex-row px-[1.19rem] sm:px-0">

        {/* 상단 소개 */}
        <div className="flex flex-col items-start sm:mt-[3.38rem] gap-[1.12rem] order-1 sm:order-2 sm:ml-[4.69rem]">
          <div className="typo-pretitle1k">세션 소개 해주시죠</div>

          <p className="typo-body2 whitespace-pre-wrap sm:w-full">
            {sessionData.intro}
          </p>
        </div>

        {/* 세션 리스트 */}
        <div className="flex flex-col mt-[1.88rem] order-2 sm:order-1 sm:mt-0">
          <p className="hidden sm:block typo-small1 text-text mb-[1.19rem]">
            * 공통 세션 이후에 이루어지는 파트별 세션 내용입니다
          </p>

          <div className="px-0.4rem sm:px-0">
            <div className="flex flex-col bg-white w-full h-[32rem] sm:h-[37.5rem] sm:w-[34.8125rem] px-[1rem] py-[1.1rem] sm:px-[1.78rem] sm:py-[1.31rem] rounded-[0.625rem]">

              <h2 className="text-center">
                <span className="block sm:hidden typo-subtitlee">
                  {sessionData.header}
                </span>

                <span className="hidden sm:block typo-pretitle1e">
                  {sessionData.header}
                </span>
              </h2>

              <div className="flex flex-col mt-[0.62rem] sm:mt-[2.5rem]">
                {sessionData.sessions.map((item, idx) => (
                  <div
                    key={idx}
                    className={`flex justify-between items-start pt-[0.36rem] pb-[0.62rem] sm:pt-[0.75rem] sm:pb-[0.62rem] border-t border-line
                      ${idx === 0 ? "pt-[0.62rem]" : ""}
                    `}
                  >
                    <div className="flex flex-col gap-[0.39rem]">
                      <p className="block sm:hidden typo-buttontextbold">
                        {item.title}
                      </p>

                      <p className="hidden sm:block typo-cardtextk">
                        {item.title}
                      </p>

                      <div className="flex flex-col gap-[0.38rem] pb-[0.2rem] sm:pb-[0rem]">
                        {item.desc.map((line, lineIdx) => (
                          <p
                            key={lineIdx}
                            className="typo-buttontext text-subtext"
                          >
                            {line ? line : "\u00A0"}
                          </p>
                        ))}
                      </div>
                    </div>

                    <div>
                      <p className="block sm:hidden typo-footer1em">
                        WEEK {String(idx + 1).padStart(2, "0")}
                      </p>

                      <p className="hidden sm:block typo-footer1ew">
                        WEEK {String(idx + 1).padStart(2, "0")}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>

          <p className="sm:hidden typo-small1 mt-[0.62rem] text-text">
            * 공통 세션 이후에 이루어지는 파트별 세션 내용입니다
          </p>
        </div>
      </div>
    </div>
  );
}
