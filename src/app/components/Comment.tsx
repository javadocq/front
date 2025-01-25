"use-client";

import axios from "axios";
import { useState } from "react";

interface CommentsProps {
  id: number;
  name: string;
  content: string;
  date: string;
}

interface CommentProps {
  comments: CommentsProps[];
  changeVar: boolean;
  setChangeVar: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Comment({
  comments,
  changeVar,
  setChangeVar,
}: CommentProps) {
  const [name, setName] = useState<string>("");
  const [comment, setComment] = useState<string>("");

  function formatDate(date: string) {
    const year = date.slice(0, 4);
    const month = date.slice(5, 7);
    const day = date.slice(8, 10);
    return `${year}년 ${month}월 ${day}일`;
  }

  function handlePost(name: string, comment: string) {
    const fetchPostComment = async () => {
      try {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const response = await axios.post(
          "https://port-0-back-m5f0l3cp0d025088.sel4.cloudtype.app/community/",
          {
            name: name,
            content: comment,
          }
        );

        setChangeVar(!changeVar);
        setName("");
        setComment("");
      } catch (error) {
        console.error("An unexpected error occurred", error);
        throw new Error(
          "서비스에 문제가 발생했습니다. 잠시 후 다시 시도해주세요."
        );
      }
    };
    fetchPostComment();
  }

  return (
    <div className="w-screen flex flex-col items-center">
      <div className="box-border border-2 flex flex-col gap-2 w-8/12 h-32 bg-zinc-100 dark:bg-gray-400 pt-2 min-w-[300px] rounded-lg">
        <textarea
          onChange={(e) => setComment(e.target.value)}
          placeholder="내용을 입력해주세요."
          className=" bg-inherit h-32 resize-none pl-2"
        />
        <div className="flex items-center box-border border-t-2 justify-between h-16 ">
          <div className="flex items-center flex-1">
            <p className="whitespace-nowrap pl-2">이름 : </p>
            <input
              onChange={(e) => setName(e.target.value)}
              className="bg-inherit ml-2 w-24"
            />
          </div>
          <button
            onClick={() => handlePost(name, comment)}
            className="bg-black text-white dark:text-customBlue text-sm flex-shrink-0 h-9 w-2/12 rounded-br-lg"
          >
            등록
          </button>
        </div>
      </div>
      <div className="mt-8"></div>
      {comments.map((comment) => {
        return (
          <div
            key={comment.id}
            className="gap-2 w-8/12 h-auto bg-zinc-100 dark:bg-gray-400 py-4 px-4 min-w-[300px] border-b-2 rounded-lg"
          >
            <div className="text-lg font-bold">{comment.name}</div>
            <div className="mt-1 text-gray-700 font-bold text-[14px]">
              {formatDate(comment.date)}
            </div>
            <div className="mt-4">{comment.content}</div>
          </div>
        );
      })}
    </div>
  );
}
