import { useState, useEffect, useCallback, useContext } from "react";
import {
  Post,
  fetchPosts,
  createPost,
  deletePost,
} from "../../services/PostsService";
import { AuthContext } from "../../contexts/AuthContext/AuthContext";
import { headers } from "../../constants/constants";

export function useUserPosts() {
  const { user } = useContext(AuthContext);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [posts, setPosts] = useState<Post[]>([]);
  const updatedHeaders = {
    ...headers,
    Authorization: `token-valid-for-${user?.id}`,
  };

  const fetchPages = useCallback(() => {
    return fetchPosts({ setPosts, page, setTotalPages, user });
  }, [page, setTotalPages, user]);

  useEffect(() => {
    fetchPages();
  }, [fetchPages]);

  const onPostSubmit = async (post: Post) => {
    await createPost(post, updatedHeaders);
    fetchPages();
  };

  const onPostDelete = async (id: number) => {
    await deletePost(id, updatedHeaders);
    fetchPages();
  };

  return {
    onPostSubmit,
    onPostDelete,
    posts,
    page,
    setPage,
    totalPages,
    user,
  };
}
