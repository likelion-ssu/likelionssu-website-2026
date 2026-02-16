import React, { useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import ProjectCard from "./ProjectCard";
import { warmImageCache } from "../../utils/warmImageCache";

export default function ProjectCardList({ projects, selectedFilter }) {
  const filteredProjects = useMemo(
    () =>
      selectedFilter === "전체"
        ? projects
        : projects.filter((p) => p.category === selectedFilter),
    [projects, selectedFilter],
  );

  useEffect(() => {
    const stopWarming = warmImageCache(
      filteredProjects.map(
        (project) => project.thumbnailImage ?? project.coverImage,
      ),
      { immediateCount: 12, batchSize: 8, batchDelayMs: 60 },
    );

    return stopWarming;
  }, [filteredProjects]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-[3.75rem] gap-y-[2.5rem] w-full max-w-[70rem] mx-auto justify-items-center">
      {filteredProjects.map((project, index) => (
        <Link
          key={project.id}
          to={`/project/${project.id}`}
          className="block w-full max-w-[20.6rem]"
          style={{
            contentVisibility: "auto",
            containIntrinsicSize: "15.9rem 20.6rem",
          }}
        >
          {/*
            첫 화면에 가까운 카드만 eager로 우선 표시하고,
            나머지는 lazy로 내려 스크롤 구간의 깜빡임/디코딩 부하를 줄인다.
          */}
          <ProjectCard
            title={project.title}
            number={project.number}
            category={project.category}
            description={project.description}
            coverImage={project.thumbnailImage ?? project.coverImage}
            loading={index < 6 ? "eager" : "lazy"}
            fetchPriority={index < 6 ? "high" : "low"}
          />
        </Link>
      ))}
    </div>
  );
}
