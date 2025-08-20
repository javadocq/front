"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import CommentInfo from "../../components/CommentInfo";
import Comment from "../../components/Comment";

interface CommentsProps {
  id: number;
  name: string;
  content: string;
  date: string;
}

export default function Home() {
  const [comments, setComments] = useState<CommentsProps[]>([]);
  const [changeVar, setChangeVar] = useState<boolean>(false);

  useEffect(() => {
    const fetchGetComments = async () => {
      try {
        const response = await axios.get("/api/community");
        setComments(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchGetComments();
  }, []);

  return (
    <div className="w-screen flex flex-col items-center pb-20 px-10 pt-20">
      <CommentInfo />
      <Comment
        comments={comments}
        changeVar={changeVar}
        setChangeVar={setChangeVar}
      />
    </div>
  );
}
