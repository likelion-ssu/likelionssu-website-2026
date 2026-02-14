import React from "react";
import de1 from "../../assets/de/de-1.svg";

export default function DeIntro() {
  return (
    <div className="w-full sm:w-[75.8125rem] flex flex-col justify-center items-center sm:flex-row sm:items-start gap-[1.25rem]  sm:gap-auto mt-[2.31rem] mb-[1.25rem] sm:mb-[6.06rem] ">
      
      <div className="flex flex-col sm:h-[20.25rem] sm:justify-between justify-center items-start  gap-[1.25rem]  ">
        
        <div className="typo-title1e text-text text-left">
          <span className="whitespace-pre-line sm:hidden block">
            {`Tell US
About
the De Part`}
          </span>

          <span className="hidden sm:block whitespace-pre-line">
            {`Tell US 
About the De Part`}
          </span>
        </div>

        <div className="sm:w-[35.4rem] typo-small2 text-text">
            <span className="whitespace-pre-line sm:hidden block">
            {`DE(Product-Designer)는 사용자가 서비스를 어떻게 인식하고 경험하는 전 과정을 설계하며, UX/UI 디자인을 통해 완성도 높은 사용자 경험 전반을 만들어갑니다. 단순한 시각적 미학을 넘어 ‘사용자 중심의 문제 해결’을 목표로, Figma를 활용해 기획 의도와 사용성을 균형 있게 담은 인터페이스를 구현합니다.
디자인의 논리와 구조를 탐구하고, 다양한 파트와 협업하며 프로덕트 중심의 디자인 역량과 커뮤니케이션 감각을 함께 성장시켜 나갑니다.`}
          </span>
          <span className="sm:whitespace-pre-line hidden sm:block">
            {`DE(Product-Designer)는 사용자가 서비스를 어떻게 인식하고 경험하는 전 과정을 설계하며, 
UX/UI 디자인을 통해 완성도 높은 사용자 경험 전반을 만들어갑니다. 단순한 시각적 미학을 넘어 ‘사용자 중심의 문
제 해결’을 목표로, Figma를 활용해 기획 의도와 사용성을 균형 있게 담은 인터페이스를 구현합니다.
디자인의 논리와 구조를 탐구하고, 다양한 파트와 협업하며 
프로덕트 중심의 디자인 역량과 커뮤니케이션 감각을 함께 성장시켜 나갑니다.`}
          </span>
          </div>
      </div>

      <img src={de1} className="mx-auto w-full sm:w-[36.5rem] self-stretch" />
    </div>
  );
}



