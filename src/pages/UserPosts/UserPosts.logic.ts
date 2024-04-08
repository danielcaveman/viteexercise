import { useState, useEffect, useContext, useCallback } from "react";
import {
  Post,
  createPost,
  deletePost,
  fetchPosts,
} from "../../services/PostsService";
import { AuthContext } from "../../contexts/AuthContext/AuthContext";

export function useUserPosts() {
  const { user } = useContext(AuthContext);
  const [showPagination, setShowPagination] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [posts, setPosts] = useState<Post[]>([]);

  const onFetchPosts = useCallback(async () => {
    const response = await fetchPosts({ page, user });
    if (response?.posts) {
      setPosts(response?.posts);
      setTotalPages(response?.totalPages || 0);
      setShowPagination(response?.showPagination);
    }
  }, [page, user]);

  useEffect(() => {
    onFetchPosts();
  }, [onFetchPosts]);

  const onPostSubmit = async (post: Post) => {
    await createPost(post);
    await onFetchPosts();
  };

  const onPostDelete = async (id: number) => {
    await deletePost(id);
    await onFetchPosts();
  };

  return {
    onPostSubmit,
    onPostDelete,
    posts,
    page,
    setPage,
    totalPages,
    user,
    showPagination,
  };
}
