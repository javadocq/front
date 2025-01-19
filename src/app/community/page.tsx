"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import CommentInfo from "../components/CommentInfo";
import Comment from "../components/Comment";

interface CommentsProps {
  id: number;
  name: string;
  comment: string;
  date: Date;
}

export default function Home() {
  const [comments, setComments] = useState<CommentsProps[]>([]);

  useEffect(() => {
    const fetchGetComments = async () => {
      try {
        const response = await axios.get("/api/comments");
        console.log(response.data);
        setComments(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchGetComments();
  }, []);

  return (
    <div className="mt-16 w-screen flex flex-col items-center pb-20 px-10">
      <CommentInfo />
      <Comment comments={comments} setComments={setComments} />
    </div>
  );
}
