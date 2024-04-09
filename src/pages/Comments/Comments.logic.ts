import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchComments } from "../../services/CommentsService";

export const useComments = () => {
  const { postId } = useParams();
  const [comment, setComment] = useState("");

  useEffect(() => {
    fetchComments({ postId: postId || "" });
  }, [postId]);

  return { comment, setComment, postId };
};
