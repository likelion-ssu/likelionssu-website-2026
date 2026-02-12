import React from "react";
import instagramIcon from "../../assets/instagram_icon.svg";
import githubIcon from "../../assets/github_icon.svg";

/** 프로젝트 상세 카드 본문만 (PC는 모달/모바일은 페이지로 분기). variant="mobile" 시 가로 꽉 참 */
export default function ProjectCardDetailContent({ project, variant }) {
  const isMobile = variant === "mobile";
  return (
    <article
      className={`w-full flex flex-col overflow-hidden bg-light
        ${isMobile ? "min-h-0 rounded-none shadow-none py-0" : "max-w-[51.6875rem] max-h-[32.4375rem] p-[0.63rem] pb-[5rem] rounded-[0.625rem] shadow-md cursor-default"}
      `}
      onClick={(e) => e.stopPropagation()}
    >
      <header
        className={`w-full shrink-0 grid grid-cols-3 gap-2 items-center bg-light ${isMobile ? "px-[1.31rem] py-[1.31rem]" : "px-6 py-4"}`}
      >
        <span className={isMobile ? "typo-body2" : "typo-commentk"}>
          {project.category}
        </span>
        <p
          className={`${isMobile ? "typo-cardtextk" : "typo-buttontextbold"} text-text text-center leading-tight`}
        >
          {project.title}
        </p>
        <span
          className={`${isMobile ? "typo-body2" : "typo-commentk"} text-right`}
        >
          {project.number}기
        </span>
      </header>

      <div
        className={`flex-1 grid grid-cols-1 lg:grid-cols-[65%_35%] lg:grid-rows-1 min-h-0 lg:gap-x-[1rem] lg:items-start ${isMobile ? "pt-0 px-[1.8rem] pb-[3.5rem] gap-[0.6rem]" : "p-[0.88rem] gap-2 pt-0 pb-8"}`}
      >
        {/* PC: 이미지 + GIT/인스타를 하나로 묶음 / 모바일: 이미지만 */}
        <div className="order-1 flex flex-col gap-[0.62rem] lg:col-start-1 lg:row-start-1 min-h-0">
          {/* 402px Figma 기준, 450px~ 에서 납작해 보이지 않도록 높이 보강 */}
          <div className="w-full h-[13rem] min-[450px]:h-[15rem] lg:h-[18rem] bg-emptyimg overflow-hidden rounded-none lg:rounded-[0.25rem] shrink-0">
            {project.imageUrl ? (
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full" />
            )}
          </div>
          {/* PC에서만 이미지 바로 아래 표시 (간격 없음) */}
          <div className="hidden lg:flex gap-[0.62rem] justify-start items-center pt-0">
            {project.githubUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 typo-small1 text-subtext hover:text-primarybrand transition"
                aria-label="GitHub"
              >
                <img src={githubIcon} alt="" className="w-5 h-5" />
              </a>
            ) : (
              <img src={githubIcon} alt="" className="w-5 h-5" />
            )}
            {project.instagramUrl ? (
              <a
                href={project.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 typo-small1 text-subtext hover:text-primarybrand transition"
                aria-label="Instagram"
              >
                <img src={instagramIcon} alt="" className="w-5 h-5" />
              </a>
            ) : (
              <img src={instagramIcon} alt="" className="w-5 h-5" />
            )}
          </div>
        </div>

        <section className="order-2 flex flex-col gap-6 lg:col-start-2 lg:row-start-1">
          <div className="flex flex-col gap-2">
            <h2
              className={`${isMobile ? "typo-bolde" : "typo-commente"} text-text`}
            >
              About
            </h2>
            <p
              className={`${isMobile ? "typo-body2" : "typo-small2"} text-text whitespace-pre-line`}
            >
              {project.about}
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h2
              className={`${isMobile ? "typo-bolde" : "typo-commente"} text-text`}
            >
              Stack
            </h2>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className={`px-1.5 py-1.5 bg-accent text-text ${isMobile ? "typo-footer2ew" : "typo-tagtextew"}`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h2
              className={`${isMobile ? "typo-bolde" : "typo-commente"} text-text`}
            >
              Team
            </h2>
            <p
              className={`${isMobile ? "typo-body2" : "typo-small2"} text-text whitespace-pre-line`}
            >
              {project.team}
            </p>
          </div>
        </section>

        {/* 모바일(402px 기준): Team 아래, 소셜 가운데 정렬, 아이콘 2rem */}
        <div className="order-3 flex gap-3 lg:hidden flex-start items-center pt-6">
          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center typo-small1 text-subtext hover:text-primarybrand transition"
              aria-label="GitHub"
            >
              <img src={githubIcon} alt="" className="w-[2rem] h-[2rem]" />
            </a>
          ) : (
            <img src={githubIcon} alt="" className="w-[2rem] h-[2rem]" />
          )}
          {project.instagramUrl ? (
            <a
              href={project.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center typo-small1 text-subtext hover:text-primarybrand transition"
              aria-label="Instagram"
            >
              <img src={instagramIcon} alt="" className="w-[2rem] h-[2rem]" />
            </a>
          ) : (
            <img src={instagramIcon} alt="" className="w-[2rem] h-[2rem]" />
          )}
        </div>
      </div>
    </article>
  );
}
