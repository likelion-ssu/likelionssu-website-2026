import React from "react";
import de2 from "../../assets/de/de-2.svg";
import de3 from "../../assets/de/de-3.svg";
import grid from "../../assets/grid-left.svg";
import hand from "../../assets/de/hand.svg";

export default function DeContent() {
  return (
    <div className="relative w-full overflow-x-hidden flex flex-col justify-start items-start gap-[2.75rem] pb-[3.49rem] sm:pb-[4.63rem]">

      <img
        src={hand}
        alt="hand"
        className="hidden swing-diagonal-right sm:block absolute left-0 top-[7.19rem] h-[9.1875rem] z-20 pointer-events-none"
      />
      
      <div
        className="absolute bottom-[0rem] left-0 w-[14.15625rem] h-[14.28125rem]
                   sm:bottom-[0rem] sm:w-[28.3125rem] sm:h-[28.5625rem]
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

        {/* =======================
            웹 레이아웃
        ======================= */}
        <div className="hidden sm:flex w-full justify-start sm:justify-center items-start">

      
          <div className="relative flex flex-col items-start gap-[1.25rem] mt-[4.87rem]">
            <div className="flex">
              <img
                src={de2}
                alt="de2"
                className="w-[21.625rem] h-[42.5625rem] object-cover"
              />
              <img
                src={de3}
                alt="de3"
                className="w-[21.625rem] h-[42.5625rem] object-cover"
              />
            </div>

            <p className="typo-small1">이연우 이현채</p>
          </div>

          <div className="flex flex-col gap-[6.75rem] mt-[4.87rem] ml-[5.62rem]">
            <div className="flex flex-col gap-[1.25rem]">
              <div className="typo-pretitle1k">파트장 한마디</div>
              <p className="typo-body2 whitespace-pre-line">
                {`안녕하세요 디자인 파트장 이연우입니다.
이 글을 보고 계신다면 멋쟁이사자처럼에 관심이 있거나
이미 아기사자가 되신 분일 거예요.
멋사와 함께하는 1년은 분명 후회 없는 시간이 될 거라
믿습니다.

디자인 파트는 앞으로 저와 함께 1년간 성장하며,
함께 고민하고 의지하는 든든한 팀이 될 거예요.
한 해를 하고 싶은 일들로 가득 채우고
하는 일마다 펑 펑 대박나길 진심으로 응원합니다. 파이팅!`}
              </p>
            </div>

            <div>
              <div className="typo-subtitlek text-text/30">DE가 고민된다면?</div>
              <div className="typo-pretitle1k pt-[0.88rem]">
                이런 사람에게 추천해요
              </div>

              <p className="typo-body2 pt-[1.25rem] whitespace-pre-wrap">
                {`UX/UI에 대해 제대로 배워보고 싶은 분

협업 속에서 디자인 역량을 강화하고 싶은 분

성장할 준비는 다 되었습니다..!
2026년에 터닝포인트가 필요한 분`}
              </p>
            </div>
          </div>
        </div>

        {/* =======================
            모바일 레이아웃
        ======================= */}
        <div className="sm:hidden flex flex-col gap-[2.75rem] w-full">

          <div className="flex flex-col gap-[1.19rem]">
            <div className="typo-pretitle1k">파트장 한마디</div>

            <p className="typo-body2 whitespace-pre-wrap">
              {`안녕하세요 디자인 파트장 이연우입니다.
이 글을 보고 계신다면 멋쟁이사자처럼에 관심이 있거나
이미 아기사자가 되신 분일 거예요.
멋사와 함께하는 1년은 분명 후회 없는 시간이 될 거라
믿습니다.

디자인 파트는 앞으로 저와 함께 1년간 성장하며,
함께 고민하고 의지하는 든든한 팀이 될 거예요.
한 해를 하고 싶은 일들로 가득 채우고
하는 일마다 펑 펑 대박나길 진심으로 응원합니다. 파이팅!`}
            </p>
          </div>

         
          <div className="relative w-full flex flex-col items-end gap-[0.81rem]">

            <img
  src={hand}
  alt="hand"
  className="swing-diagonal-right absolute left-[-1.9rem] top-0 h-[4.59375rem] z-50 pointer-events-none"
/>


            <div className="flex w-full">
              <img src={de2} alt="de2" className="w-1/2 object-cover" />
              <img src={de3} alt="de3" className="w-1/2 object-cover" />
            </div>

            <p className="typo-small1">이연우 이현채</p>
          </div>

          <div>
            <div className="typo-subtitlek text-text/30">DE가 고민된다면?</div>
            <div className="typo-pretitle1k pt-[0.88rem]">
              이런 사람에게 추천해요
            </div>

            <p className="typo-body2 pt-[1.19rem] whitespace-pre-wrap">
              {`UX/UI에 대해 제대로 배워보고 싶은 분

협업 속에서 디자인 역량을 강화하고 싶은 분

성장할 준비는 다 되었습니다..!
2026년에 터닝포인트가 필요한 분`}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
