import { useState, useEffect, useCallback } from "react";
import {
  Post,
  fetchPosts,
  createPost,
  deletePost,
} from "../../services/PostsService";

export function useUserPosts() {
  // const { user } = useContext(AuthContext);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [posts, setPosts] = useState<Post[]>([]);

  const fetchPages = useCallback(() => {
    return fetchPosts({ setPosts, page, setTotalPages });
  }, [page, setTotalPages]);

  useEffect(() => {
    fetchPages();
  }, [fetchPages]);

  const onPostSubmit = async (post: Post) => {
    await createPost(post);
    fetchPages();
  };

  const onPostDelete = async (id: number) => {
    await deletePost(id);
    fetchPages();
  };

  return {
    onPostSubmit,
    onPostDelete,
    posts,
    page,
    setPage,
    totalPages,
  };
}
