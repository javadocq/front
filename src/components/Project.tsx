"use client";

import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Image from "next/image";
import Filter from "./Filter";
import axios from "axios";
import ProjectModal from "./ProjectModal";

interface ProjectProps {
  id: number;
  type: string;
  img: string;
  name: string;
  introduce: string;
  function: string[];
}

export default function Project() {
  const [selectedFilter, setSelectedFilter] = useState<string>("2025");
  const [modal, setModal] = useState<boolean>(false);
  const [projects, setProjects] = useState<ProjectProps[]>([]);
  const [filteredProjects, setFilteredProjects] = useState<ProjectProps[]>([]);
  const [projectId, setProjectId] = useState<number>(0);

  useEffect(() => {
    const FetchProjectGet = async () => {
      try {
        const response = await axios.get("/api/projects");
        setProjects(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("An unexpected error occurred", error);
        throw new Error(
          "서비스에 문제가 발생했습니다. 잠시 후 다시 시도해주세요.",
        );
      }
    };
    FetchProjectGet();
  }, []);

  useEffect(() => {
    if (selectedFilter === "전체") {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(
        projects.filter((project) => project.type.includes(selectedFilter)),
      );
    }
  }, [selectedFilter, projects]);

  function handleSetProject(projectId: number) {
    setModal(true);
    setProjectId(projectId);
  }

  return (
    <div className="mt-16 w-10/12 flex flex-col items-center pb-20">
      <Filter filter={selectedFilter} setFilter={setSelectedFilter} />
      <div className="grid grid-cols-4 gap-16 mt-16 max-[1380px]:grid-cols-3 max-[1080px]:grid-cols-2 max-[765px]:grid-cols-1">
        {filteredProjects.map((project) => {
          return (
            <button
              type="button"
              key={project.id}
              onClick={() => handleSetProject(project.id)}
              className="box-border border-1 w-72 h-[270px] pb-2 rounded-lg flex flex-col items-center shadow-[4px_4px_4px_rgba(0,0,0,0.7)] bg-lightBg dark:bg-darkBg cursor-pointer"
            >
              <div className="w-[256px] h-[128px] rounded-lg flex items-center justify-center mt-4">
                <Image
                  src={project.img}
                  alt="프로젝트 사진"
                  width={256}
                  height={128}
                  priority
                  className="rounded-lg"
                />
              </div>
              <p className="text-[18px] font-bold text-left w-64 mt-1 ml-[5px] line-clamp-1">
                {project.name}
              </p>
              <p className="text-[12px] text-left w-64 line-clamp-2 mt-1 ml-[5px]">
                {project.introduce}
              </p>
              <div className="flex w-64 gap-1 mt-3 ml-[5px] overflow-x-hidden">
                {project.function.map((category) => {
                  return (
                    <div
                      key={category}
                      className="box-border flex items-center justify-center 
                     dark:bg-white dark:text-black bg-filterBg text-white
                     rounded-3xl font-bold text-[12px] p-1 px-[8px] min-w-[40px] whitespace-nowrap 
                     overflow-hidden text-ellipsis"
                    >
                      {category}
                    </div>
                  );
                })}
              </div>
            </button>
          );
        })}
      </div>
      <AnimatePresence>
        {modal && <ProjectModal id={projectId} setModal={setModal} />}
      </AnimatePresence>
    </div>
  );
}
