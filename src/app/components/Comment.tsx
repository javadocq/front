"use-client";

import axios from "axios";
import { useState } from "react";

interface CommentsProps {
  id: number;
  name: string;
  comment: string;
  date: Date;
}

interface CommentProps {
  comments: CommentsProps[];
  setComments: React.Dispatch<React.SetStateAction<CommentsProps[]>>;
}

export default function Comment({ comments, setComments }: CommentProps) {
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
        const response = await axios.post("/api/comments", {
          name: name,
          comment: comment,
        });
        setComments(response.data);
        setName("");
        setComment("");
      } catch (error) {
        console.log(error);
      }
    };
    fetchPostComment();
  }

  return (
    <div className="w-screen flex flex-col items-center">
      <div className="box-border border-2 flex flex-col gap-2 w-8/12 h-32 bg-zinc-100 dark:bg-gray-400 pt-2 min-w-[300px]">
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
            className="bg-black text-white dark:text-customBlue text-sm flex-shrink-0 h-9 w-2/12"
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
            className="gap-2 w-8/12 h-auto bg-zinc-100 dark:bg-gray-400 py-4 px-4 min-w-[300px] border-b-2"
          >
            <div className="text-lg font-bold">{comment.name}</div>
            <div className="mt-1 text-gray-400 font-bold">
              {formatDate(comment.date.toLocaleString())}
            </div>
            <div className="mt-4">{comment.comment}</div>
          </div>
        );
      })}
    </div>
  );
}
