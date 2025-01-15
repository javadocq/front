import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";

interface ProjectModalProps {
  id: number;
  setModal: (modal: boolean) => void;
}

interface ProjectProp {
  id: number;
  img: string;
  name: string;
  introduce: string;
  function: string[];
  github: string;
  velog: string;
}

export default function ProjectModal({ id, setModal }: ProjectModalProps) {
  const [project, setProject] = useState<ProjectProp | null>(null);

  useEffect(() => {
    const FetchProjectGet = async () => {
      try {
        const response = await axios.get(`/api/dummy/${id}`);
        setProject(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    FetchProjectGet();
  }, [id]);
  return (
    <div
      id="default-modal"
      className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-full bg-black bg-opacity-50"
    >
      <div className="relative p-4 w-full max-w-2xl max-h-full">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              {project?.name}
            </h3>
            <button
              onClick={() => setModal(false)}
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-hide="default-modal"
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
            </button>
          </div>
          <div className="p-4 md:p-5 space-y-4 flex flex-col items-center">
            <Image
              src={project?.img || "/camera.png"}
              alt="프로젝트 사진"
              width={111}
              height={111}
            />
            <p className="text-base w-11/12 text-start leading-relaxed text-gray-500 dark:text-white">
              {project?.introduce}
            </p>
          </div>

          <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600 gap-2">
            {project?.function.map((category, index) => {
              return (
                <div
                  key={index}
                  className="box-border flex items-center justify-center 
                     dark:∂bg-slate-50 dark:text-black bg-zinc-400 dark:bg-white text-gray-700 
                     rounded-3xl font-bold text-xs p-1"
                >
                  {category}
                </div>
              );
            })}
          </div>
          <div className="flex flex-col pl-5 pb-4 gap-2 font-bold">
            <Link
              href={project?.github || ""}
              className="hover:text-customBlue w-96"
            >
              깃허브 주소 : {project?.github}
            </Link>
            <Link
              href={project?.velog || ""}
              className="hover:text-customBlue w-96"
            >
              velog 주소 : {project?.velog}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
