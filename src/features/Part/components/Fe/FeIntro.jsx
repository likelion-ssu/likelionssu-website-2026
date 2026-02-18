import React from "react";
import fe1 from "../../assets/fe/fe-1.webp";

export default function FeIntro() {
  return (
    <div className="w-full sm:w-[75.8125rem] flex flex-col justify-center items-start gap-[1.25rem]  sm:gap-[2.38rem] mt-[2.31rem] mb-[1.25rem] sm:mb-[2.37rem] ">
      
      <div className="flex flex-col justify-center items-center sm:item-start  gap-[1.25rem] sm:flex-row sm:gap-[7.12rem]">
        
        <div className="typo-title1e text-text text-left">
          <span className="whitespace-pre-line sm:hidden block">
            {`Tell US
About
the FE Part`}
          </span>

          <span className="hidden sm:block whitespace-pre-line">
            {`Tell US 
About the FE Part`}
          </span>
        </div>

        <div className="hidden sm:block sm:w-[35.1875rem] typo-small2 text-text">
          FE(Front-End)는 사용자가 가장 먼저 마주하는 UI/UX를 직접 구현하며, 팀의 상상을 현실로 시각화하는 역할을 수행합니다. React와 Tailwind CSS 등 트렌디한 기술 스택을 경험하며, 서비스가 감각적이고 편리하게 동작하도록 개발합니다. PM, DE, BE  모든 파트와의 심도 깊은 소통을 통해 프론트엔드  실무 역량과 협업 능력을 동시에 키울 수 있습니다.
        </div>

        <div className="sm:hidden whitespace-pre-wrap typo-small2 text-text">
          {`FE(Front-End)는 사용자가 가장 먼저 마주하는 UI/UX를
직접 구현하며, 팀의 상상을 현실로 시각화하는 역할을 수행합니다.
React와 Tailwind CSS 등 트렌디한 기술 스택을 경험하며,
서비스가 감각적이고 편리하게 동작하도록 개발합니다.
PM, DE, BE  모든 파트와의 심도 깊은 소통을 통해
프론트엔드  실무 역량과 협업 능력을 동시에 키울 수 있습니다.`}
        </div>
      </div>

      <img src={fe1} className="mx-auto w-full sm:w-[75.8125rem] self-stretch" />
    </div>
  );
}


