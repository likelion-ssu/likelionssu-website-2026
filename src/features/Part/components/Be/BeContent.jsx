import React from "react";
import be2 from "../../assets/be/be-2.svg";
import be3 from "../../assets/be/be-3.svg";
import be3m from "../../assets/be/be-3-m.svg";
import grid from "../../assets/grid-left.svg";
import meow from "../../assets/be/meow.svg";

export default function BeContent() {
  return (
    <div className="relative w-full overflow-x-hidden flex flex-col justify-start items-start gap-[2.75rem] min-h-[54.1875rem] pb-[2.68rem]">


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

      <hr className="w-full border-t-[0.7px] border-line sm:hidden relative z-10" />
      <hr className="hidden sm:block absolute top-0 right-0 w-[44.5rem] border-t-[0.7px] border-line z-10" />


      <div className="relative w-full px-[1.19rem] sm:px-0 z-10">

        {/*  웹  */}
        <div className="hidden sm:flex w-full justify-center">
          <div className="w-[76.315rem] mt-[6.19rem] grid grid-cols-[auto_1fr] gap-x-[2.94rem]">

            <div className="flex flex-col items-start gap-[1.25rem]">
              <img src={be2} alt="be2" className="h-[39.5rem]" />
              <p className="typo-small1">이성윤 최원재 조해원 조수한</p>
            </div>

            <div className="grid grid-cols-2 grid-rows-2 gap-x-[5.5rem] gap-y-[2.81rem]">

              <div className="flex flex-col gap-[1.25rem] pl-[0.81rem]">
                <div className="typo-pretitle1k">파트장 한마디</div>

                <p className="typo-body2 whitespace-pre-line">
                  {`안녕하세요 백엔드 파트장 조수한입니다.
백엔드에 관심있어하는 여러분들은 생각이 깊고,
성실하고, 열정 넘치는 멋쟁이들일거라고 생각해요!

멋쟁이 아기사자 분들이 백엔드를 선택한 것이 후회되지 
않도록 최선을 다해서 세션을 준비하고 있습니다.

백엔드 파트는 누구보다 가깝고, 의지하고, 서로 긍정적
인 영향을 줄 수 있는 파트가 되었으면 해요.
올 한 해 멋사가 여러분에게 가장 의미 있었던 기억 중 하
나로 남기를 바랍니다! 🦁`}
                </p>
              </div>

              <div className="flex flex-col pt-[0.5rem]">
                <div className="typo-subtitlek text-text/30">BE가 고민된다면?</div>

                <div className="typo-pretitle1k pt-[0.88rem]">
                  이런 사람에게 추천해요
                </div>

                <p className="typo-body2 pt-[1.25rem] whitespace-pre-wrap">
                  {`서버와 데이터베이스에 관심 가득하신 분

책임감을 가지고 끝까지 목표를 향해 달려가는 경험을 원하시는 분

끊임없이 고민하고, 부딪히며 성장하고 싶으신 분`}
                </p>
              </div>

              
              <div className="relative col-span-2 flex flex-col items-start gap-[1.25rem]">
                
                <img
                  src={meow}
                  alt="meow"
                  className="swing-diagonal absolute right-[-6.4rem] -top-[5rem] h-[8.625rem] z-20 pointer-events-none"
                />

                <img
                  src={be3}
                  alt="be3"
                  className="w-full h-[15.75rem] object-cover"
                />
                <p className="typo-small1">이성윤 최원재 조해원 조수한</p>
              </div>

            </div>
          </div>
        </div>

        {/* =모바일 */}
        <div className="sm:hidden flex flex-col gap-[2.75rem] w-full">

    
          <div className="flex flex-col gap-[1.19rem]">
            <div className="typo-pretitle1k">파트장 한마디</div>

            <p className="typo-body2 whitespace-pre-wrap">
              {`안녕하세요 백엔드 파트장 조수한입니다.
백엔드에 관심있어하는 여러분들은 생각이 깊고,
성실하고, 열정 넘치는 멋쟁이들일거라고 생각해요!

멋쟁이 아기사자 분들이 백엔드를 선택한 것이 후회되지 않도록 최선을 다해서 세션을 준비하고 있습니다.

백엔드 파트는 누구보다 가깝고, 의지하고, 서로 긍정적인 영향을 줄 수 있는 파트가 되었으면 해요.
올 한 해 멋사가 여러분에게 가장 의미 있었던 기억 중 하나로 남기를 바랍니다! 🦁`}
            </p>
          </div>
          <div className="flex flex-col items-end gap-[0.81rem]">
            <img src={be3m} alt="be3m" className="w-full" />
            <p className="typo-small1">이성윤 최원재 조해원 조수한</p>
          </div>
          <div>
            <div className="typo-subtitlek text-text/30">BE가 고민된다면?</div>

            <div className="typo-pretitle1k pt-[0.88rem]">
              이런 사람에게 추천해요
            </div>

            <p className="typo-body2 pt-[1.19rem] whitespace-pre-wrap">
              {`서버와 데이터베이스에 관심 가득하신 분

책임감을 가지고 끝까지 목표를 향해
달려가는 경험을 원하시는 분

끊임없이 고민하고, 부딪히며 성장하고 싶으신 분`}
            </p>
          </div>
          <div className="relative flex flex-col items-end gap-[0.81rem]">

            <img
              src={meow}
              alt="meow"
              className="swing-diagonal absolute right-[-1.47rem] -top-[9.61rem] h-[4.3125rem] z-20 pointer-events-none"
            />

            <img src={be3} alt="be3" className="w-full" />
            <p className="typo-small1">이성윤 최원재 조해원 조수한</p>
          </div>
        </div>

      </div>
    </div>
  );
}
