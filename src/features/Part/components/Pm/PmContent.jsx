import React from "react";
import pm2 from "../../assets/pm/pm-2.svg";
import pm3 from "../../assets/pm/pm-3.svg";
import grid from "../../assets/grid-left.svg";
import camera from "../../assets/pm/camera.svg"

export default function PmContent() {
  return (
    <div className="relative w-full overflow-x-hidden flex flex-col justify-start items-start gap-[2.75rem] min-h-[58rem] pb-[2.68rem]">

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



        <div className="hidden sm:block w-full relative">

          <div className="absolute top-0 left-[7.25rem] flex flex-col items-start gap-[1.25rem]">
            <img src={pm2} alt="pm2" className="w-[25.5625rem]" />
            <p className="typo-small1">유승빈 김민서 장민영 박현지</p>
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
            <div className="typo-pretitle1k pt-[0.88rem]">
              이런 사람에게 추천해요
            </div>

            <p className="typo-body2 pt-[1.25rem] whitespace-pre-wrap">
              {`아직 모든 답을 알고 있진 않아도,
사용자 한 명의 불편함에는 끝까지 이유를 묻고 싶은 분

개발이나 디자인을 완벽히 알진 못하지만,
그래서 더 많이 묻고 배우는 걸 두려워하지 않는 분

AI를 자주 써보며 ‘이걸 어떻게 하면
제품 경험으로 만들 수 있을까’를 계속 고민해보는 분`}
            </p>
          </div>

          <div className="absolute top-[23.62rem] right-[6.69rem] flex flex-col items-end gap-[1.25rem]">
            <img src={pm3} alt="pm3" className="h-[25.5625rem]" />
            <p className="typo-small1">유승빈 김민서 장민영 박현지</p>
          </div>
        </div>




        <div className="sm:hidden flex flex-col gap-[2.75rem] w-full">

          <div className="flex flex-col gap-[1.19rem]">
            <div className="typo-pretitle1k">파트장 한마디</div>

            <p className="typo-body2 whitespace-pre-wrap">
              {`일을 하다 보면 속도가 결정적인 순간이 있습니다.
동시에, 무엇을 선택하고 무엇을 버릴지의 판단이 결과를 
바꾸는 순간도 있습니다.

저는 팀의 모든 선택이 완벽할 수는 없다고 생각합니다.
그래서 더 빠르게 결정하고,
필요하다면 빠르게 수정할 수 있는 기준을 만드는 것이 중
요하다고 생각합니다.`}
            </p>
          </div>

          <div className="flex flex-col items-end gap-[0.81rem]">
            <img src={pm2} alt="pm2" className="w-full" />
            <p className="typo-small1">유승빈 김민서 장민영 박현지</p>
          </div>

          <div>
            <div className="typo-subtitlek text-text/30">PM이 고민된다면?</div>
            <div className="typo-pretitle1k pt-[0.88rem]">
              이런 사람에게 추천해요
            </div>

            <p className="typo-body2 pt-[1.19rem] whitespace-pre-wrap">
              {`아직 모든 답을 알고 있진 않아도,
사용자 한 명의 불편함에는 끝까지 이유를 묻고 싶은 분

개발이나 디자인을 완벽히 알진 못하지만,
그래서 더 많이 묻고 배우는 걸 두려워하지 않는 분

AI를 자주 써보며 ‘이걸 어떻게 하면
제품 경험으로 만들 수 있을까’를 계속 고민해보는 분`}
            </p>
          </div>

          <div className="flex flex-col items-end gap-[0.81rem]">
            <img src={pm3} alt="pm3" className="w-full" />
            <p className="typo-small1">유승빈 김민서 장민영 박현지</p>
          </div>
        </div>
      </div>
    </div>
  );
}
