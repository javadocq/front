"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Filter from "./Filter";
import axios from "axios";
import ProjectModal from "./ProjectModal";

interface ProjectProps {
  id: number;
  img: string;
  name: string;
  introduce: string;
  function: string[];
}

export default function Project() {
  const [selectedFilter, setSelectedFilter] = useState<string>("전체");
  const [modal, setModal] = useState<boolean>(false);
  const [projects, setProjects] = useState<ProjectProps[]>([]);
  const [projectId, setProjectId] = useState<number>(0);

  useEffect(() => {
    const FetchProjectGet = async () => {
      try {
        const response = await axios.get("/api/dummy");
        setProjects(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    FetchProjectGet();
  }, []);

  function handleSetProject(projectId: number) {
    setModal(true);
    setProjectId(projectId);
  }

  return (
    <div className="mt-16 w-10/12 flex flex-col items-center pb-20">
      <Filter filter={selectedFilter} setFilter={setSelectedFilter} />
      <div className="grid grid-cols-4 gap-16 mt-16 max-[1380px]:grid-cols-3 max-[1080px]:grid-cols-2 max-[765px]:grid-cols-1">
        {projects.map((project) => {
          return (
            <div
              key={project.id}
              onClick={() => handleSetProject(project.id)}
              className="box-border border-2 w-72 h-64 pb-2 rounded-lg flex flex-col items-center bg-zinc-100 dark:bg-gray-700 cursor-pointer"
            >
              <div className="box-border border-2 border-black dark:border-white w-64 h-32 rounded-lg flex items-center justify-center mt-4">
                <Image
                  src={project.img}
                  alt="프로젝트 사진"
                  width={110}
                  height={110}
                  priority // 이 속성을 추가하면 이미지 로딩 우선순위가 높아짐
                />
              </div>
              <p className="text-lg font-bold text-left w-64 mt-1">
                {project.name}
              </p>
              <p className="text-sm text-left w-64">{project.introduce}</p>
              <div className="flex w-64 gap-2 mt-2">
                {project.function.map((category, index) => {
                  return (
                    <div
                      key={index}
                      className="box-border flex items-center justify-center 
                     dark:bg-slate-50 dark:text-black bg-zinc-400 text-gray-700 
                     rounded-3xl font-bold text-xs p-1"
                    >
                      {category}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
      {modal && <ProjectModal id={projectId} setModal={setModal} />}
    </div>
  );
}
