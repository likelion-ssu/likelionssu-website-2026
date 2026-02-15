import React from "react";
import { Link } from "react-router-dom";
import ProjectCard from "./ProjectCard";

export default function ProjectCardList({ projects, selectedFilter }) {
  const filteredProjects =
    selectedFilter === "전체"
      ? projects
      : projects.filter((p) => p.category === selectedFilter);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-[3.75rem] gap-y-[2.5rem] w-full max-w-[70rem] mx-auto justify-items-center">
      {filteredProjects.map((project) => (
        <Link
          key={project.id}
          to={`/project/${project.id}`}
          className="block w-full max-w-[20.6rem]"
        >
          <ProjectCard
            title={project.title}
            number={project.number}
            category={project.category}
            description={project.description}
            coverImage={project.coverImage}
          />
        </Link>
      ))}
    </div>
  );
}
