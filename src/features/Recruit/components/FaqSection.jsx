import React, { useState, useCallback } from "react";
import faq1 from "../assets/FaqSection_1.svg";
import faq2 from "../assets/FaqSection_2.svg";
import faq3 from "../assets/FaqSection_3.svg";
import faq4 from "../assets/FaqSection_4.svg";
import faq5 from "../assets/FaqSection_5.svg";
import faq6 from "../assets/FaqSection_6.svg";
import faqPlus from "../assets/FaqSection_plus.svg";
import answer1 from "../assets/FaqSection_1._answer.svg";
import answer2 from "../assets/FaqSection_2_answer.svg";
import answer3 from "../assets/FaqSection_3_answer.svg";
import answer4 from "../assets/FaqSection_4_answer.svg";
import answer5 from "../assets/FaqSection_5_answer.svg";
import answer6 from "../assets/FaqSection_6_answer.svg";

const FAQ_ITEMS = [
  {
    image: faq1,
    answerImage: answer1,
    question: "숭멋사는 어떤 동아리인가요?",
  },
  {
    image: faq2,
    answerImage: answer2,
    question: "지원서류에 포트폴리오는 필수인가요?",
  },
  {
    image: faq3,
    answerImage: answer3,
    question: "파트별 커리큘럼이 어떻게 되나요?",
  },
  { image: faq4, answerImage: answer4, question: "정기 모임은 언제인가요?" },
  {
    image: faq5,
    answerImage: answer5,
    question:
      "2학기에 개인 사유 (군 휴학 등)으로 참여가 어려운데 지원할 수 있나요?",
  },
  {
    image: faq6,
    answerImage: answer6,
    question: "합격하려면 어떤 점을 준비하면 좋을까요?",
  },
];

export default function FaqSection() {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const closeFaq = useCallback(() => setOpenFaqIndex(null), []);

  return (
    <section
      id="faq-section"
      className="scroll-mt-[5.9375rem] lg:scroll-mt-[3.5625rem] bg-secondarybrand w-full px-4 lg:px-[3.75rem]"
    >
      {/* 모바일: 열린 카드 있을 때만, 바깥 클릭 시 닫는 백드롭 */}
      {openFaqIndex !== null && (
        <button
          type="button"
          className="fixed inset-0 z-10 lg:hidden bg-transparent"
          onClick={closeFaq}
          aria-label="닫기"
        />
      )}

      {/* 타이틀 - 모바일/pc 분리 */}
      <h2 className="text-center text-primarybrand mb-12 lg:mb-16">
        <span className="typo-subtitlee lg:hidden">Got Questions?</span>
        <span className="hidden lg:block typo-pretitle1e">Got Questions?</span>
      </h2>

      {/* 카드 그리드: PC 4열(첫 줄 4개, 둘째 줄 3개), 모바일 2열 */}
      <div className="max-w-[75rem] mx-auto grid grid-cols-2 lg:grid-cols-4 gap-[0.94rem] lg:gap-[1.25rem]">
        {/* 질문 카드 6개 - 이미지만 노출, 호버 시 검은 화면 + 텍스트 */}
        {FAQ_ITEMS.map((item, index) => (
          <article
            key={item.question}
            className="group relative aspect-square w-full overflow-hidden rounded-lg z-[11] lg:z-auto transition-transform duration-200 ease-out active:scale-[0.98] lg:active:scale-100"
            onClick={() => setOpenFaqIndex(index)}
          >
            {/* 모바일: 2배 크기로 렌더 후 scale(0.5) → 레티나에서 선명하게 */}
            <div className="absolute inset-0 w-[200%] h-[200%] scale-50 origin-top-left lg:w-full lg:h-full lg:scale-100 lg:origin-center">
              <img
                src={item.image}
                alt={item.question}
                className="size-full object-contain lg:object-cover object-center bg-secondarybrand"
              />
            </div>
            <div className="absolute inset-0 w-[200%] h-[200%] scale-50 origin-top-left lg:w-full lg:h-full lg:scale-100 lg:origin-center pointer-events-none lg:pointer-events-auto">
              <img
                src={item.answerImage}
                alt=""
                className={`size-full object-contain lg:object-cover object-center bg-secondarybrand transition-opacity duration-300 ease-out ${
                  openFaqIndex === index
                    ? "opacity-100 lg:group-hover:opacity-100"
                    : "opacity-0 lg:group-hover:opacity-100"
                }`}
              />
            </div>
          </article>
        ))}

        {/* 7번째: 직접 질문하러 가기 - 이미지만 / 추후 오픈채팅 링크 삽입 */}
        <a
          href="#"
          className={`group relative aspect-square w-full overflow-hidden rounded-lg block ${openFaqIndex !== null ? "z-[11]" : ""}`}
        >
          <div className="absolute inset-0 w-[200%] h-[200%] scale-50 origin-top-left lg:w-full lg:h-full lg:scale-100 lg:origin-center">
            <img
              src={faqPlus}
              alt="직접 질문하러 가기"
              className="size-full object-contain lg:object-cover object-center bg-secondarybrand"
            />
          </div>
        </a>
      </div>
    </section>
  );
}
