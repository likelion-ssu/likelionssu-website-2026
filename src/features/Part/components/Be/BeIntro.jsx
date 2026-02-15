import React from "react";
import be1 from "../../assets/be/be-1.svg";

export default function BeIntro() {
  return (
    <div className="w-full sm:w-[75.8125rem] flex flex-col justify-center  sm:flex-row sm:items-start gap-[1.25rem]  sm:gap-auto mt-[2.31rem] mb-[1.25rem] sm:mb-[6.06rem] ">
      
      <div className="flex flex-col sm:h-[20.25rem] sm:justify-between justify-center items-start  gap-[1.25rem]  ">
        
        <div className="typo-title1e text-text text-left">
          <span className="whitespace-pre-line sm:hidden block">
            {`Tell US
About
the Be Part`}
          </span>

          <span className="hidden sm:block whitespace-pre-line">
            {`Tell US 
About the Be Part`}
          </span>
        </div>

        <div className="sm:w-[35.4rem] typo-small2 text-text">
            <span className="whitespace-pre-line sm:hidden block">
            {`BE(Back-End)는 API·서버·데이터베이스 설계 및 관리를 담당하며,
안정적인 서비스 운영을 위한 기술적 기반을 마련합니다.
서비스가 해결해야 할 문제를 기술적으로 정의하고, 비즈니스 로직과
데이터 구조를 설계하여 서비스의 핵심 기능을 책임집니다.
또한, 지속적인 기능 개선과 유지보수를 통해 안정성과 확장성을 확보하여
변화하는 비즈니스 환경에 유연하게 대응합니다.`}
          </span>
          <span className="sm:whitespace-pre-line hidden sm:block">
            {`BE(Back-End)는 API·서버·데이터베이스 설계 및 관리를 담당하며,
안정적인 서비스 운영을 위한 기술적 기반을 마련합니다. 서비스가 해결해야 할 문제를 기술적으로 정의하고,
비즈니스 로직과 데이터 구조를 설계하여 서비스의 핵심 기능을 책임집니다.
또한, 지속적인 기능 개선과 유지보수를 통해 안정성과 확장성을 확보하여
변화하는 비즈니스 환경에 유연하게 대응합니다.`}
          </span>
          </div>
      </div>

      <img src={be1} className="ml-auto w-full sm:w-[36.5rem] self-stretch" />
    </div>
  );
}



