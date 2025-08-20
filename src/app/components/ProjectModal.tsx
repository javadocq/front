import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import ArrowBlack from "../../icons/project/arrow_right.svg";
import ArrowWhite from "../../icons/project/arrow_right_white.svg";
import useTheme from "next-theme";
import { motion } from "framer-motion";

interface ProjectModalProps {
  id: number;
  setModal: (modal: boolean) => void;
}

interface ProjectProp {
  id: number;
  img: string;
  name: string;
  introduce: string;
  role: string;
  functions: string[];
  solutions: string[];
  takeaways: string[];
  category: string[];
  deploy: string;
  velog: string;
}

export default function ProjectModal({ id, setModal }: ProjectModalProps) {
  const { theme } = useTheme();
  const [project, setProject] = useState<ProjectProp | null>(null);

  useEffect(() => {
    const FetchProjectGet = async () => {
      try {
        const response = await axios.get(`/api/projects/${id}`);
        setProject(response.data);
      } catch (error) {
        console.error("An unexpected error occurred", error);
        throw new Error(
          "서비스에 문제가 발생했습니다. 잠시 후 다시 시도해주세요.",
        );
      }
    };
    FetchProjectGet();
  }, [id]);
  return (
    <motion.div
      className="modal fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-full bg-black bg-opacity-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 0.7,
      }}
      role="img"
      onKeyDown={() => {}}
      onClick={() => setModal(false)}
    >
      <div
        role="tab"
        tabIndex={0}
        onKeyDown={() => {}}
        className="relative p-4 w-full max-w-3xl max-h-[85vh] overflow-auto scrollbar-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative bg-lightBg rounded-lg shadow dark:bg-darkBg">
          <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t border-black dark:border-white">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              {project?.name}
            </h3>
            <button
              onClick={() => setModal(false)}
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 dark:text-white rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
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
              width={640}
              height={250}
            />
            <strong className="text-[30px] w-11/12 text-left font-bold leading-relaxed text-black dark:text-white">
              💡{project?.name}💡​
            </strong>
            <p className="text-[16px] w-11/12 text-left leading-relaxed text-black dark:text-white">
              {project?.introduce}
            </p>
            <strong className="text-[20px] w-11/12 text-left font-bold leading-relaxed text-black dark:text-white">
              ❗​ 내가 맡은 역할
            </strong>
            <p className="text-[16px] w-11/12 text-left leading-relaxed text-black dark:text-white">
              {project?.role || "해당 사항 없음"}
            </p>
            <strong className="text-[20px] w-11/12 text-left font-bold leading-relaxed text-black dark:text-white">
              🚀​ 기능
            </strong>
            {project?.functions?.map((func) => {
              return (
                <p
                  key={func}
                  className="text-[16px] w-11/12 text-left text-black dark:text-white"
                >
                  - {func}
                </p>
              );
            })}

            <strong className="text-[20px] w-11/12 text-left font-bold leading-relaxed text-black dark:text-white">
              ⌛​ 문제 및 해결
            </strong>
            {project?.solutions?.map((solution) => {
              return (
                <p
                  key={solution}
                  className="text-[16px] w-11/12 text-left text-black dark:text-white"
                >
                  - {solution}
                </p>
              );
            })}

            <strong className="text-[20px] w-11/12 font-bold text-left leading-relaxed text-black dark:text-white">
              🏆 느낀점
            </strong>
            {project?.takeaways?.map((takeaway) => {
              return (
                <p
                  key={takeaway}
                  className="text-[16px] w-11/12 text-left text-black dark:text-white"
                >
                  - {takeaway}
                </p>
              );
            })}
          </div>

          <div className="flex items-center p-4 md:p-5 border-t border-black rounded-b dark:border-white gap-2 flex-wrap">
            {project?.category?.map((category) => {
              return (
                <div
                  key={category}
                  className="box-border flex items-center justify-center 
                     dark:bg-slate-50 dark:text-black bg-filterBg dark:bg-white text-white
                     rounded-3xl font-bold text-[12px] p-1 px-[8px]"
                >
                  {category}
                </div>
              );
            })}
          </div>
          <div className="flex flex-col pl-5 pb-4 gap-1 font-[400]">
            <Link
              href={project?.deploy || ""}
              className="hover:text-customBlue w-112 flex-wrap flex gap-[2px]"
            >
              {theme === "light" ? (
                <ArrowBlack width={10} height={10} />
              ) : (
                <ArrowWhite width={10} height={10} />
              )}
              배포 주소 : {project?.deploy}
            </Link>
            <Link
              href={project?.velog || ""}
              className="hover:text-customBlue w-112 flex-wrap flex gap-[2px]"
            >
              {theme === "light" ? (
                <ArrowBlack width={10} height={10} />
              ) : (
                <ArrowWhite width={10} height={10} />
              )}
              velog 주소 : {project?.velog}
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
