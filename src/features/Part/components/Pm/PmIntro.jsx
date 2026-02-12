import React from "react";
import pm1 from "../../assets/pm/pm-1.svg";

export default function PmIntro() {
  return (
    <div className="w-full sm:w-[75.8125rem] flex flex-col justify-center items-center sm:items-start gap-[1.25rem]  sm:gap-[2.38rem] mt-[2.31rem]  ">
      
      <div className="flex flex-col justify-center items-start  gap-[1.25rem] sm:flex-row sm:gap-[7.12rem]">
        
        <div className="typo-title1e text-text text-left">
          <span className="whitespace-pre-line sm:hidden block">
            {`Tell US
About
the PM Part`}
          </span>

          <span className="hidden sm:block whitespace-pre-line">
            {`Tell US 
About the PM Part`}
          </span>
        </div>

        <div className="sm:w-[35.1875rem] typo-small2 text-text">
          PM(Product-Manager)은 프로덕트의 전반적인 흐름을 관리하며, 목표 달성을 위한 전략적 방향과
          우선순위를 결정합니다. 프로덕트의 목표와 기준을 명확히 설정하고, 팀이 같은 방향으로
          나아갈 수 있도록 핵심 의사결정을 주도합니다. 개발 진행 중 발생하는 이슈와 리스크를
          판단하여, 상황에 맞는 대응 전략을 결정합니다. 전체 프로세스를 총괄하며, 프로덕트가 설정된
          목표에 도달할 수 있도록 최종적인 책임을 집니다.
        </div>
      </div>

      <img src={pm1} className="mx-auto w-full sm:w-[75.8125rem] self-stretch" />
    </div>
  );
}



