import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Comment, fetchComments } from "../../services/CommentsService";

export const useComments = () => {
  const { postId } = useParams();
  const [comment, setComment] = useState("");

  const [comments, setComments] = useState<Comment[]>([]);

  const onFetchComments = useCallback(async () => {
    const response = await fetchComments({ postId: postId || "" });

    if (response?.comments) {
      setComments(response?.comments);
    }
  }, [postId]);

  useEffect(() => {
    onFetchComments();
  }, [onFetchComments]);

  return { comment, setComment, postId, comments };
};
