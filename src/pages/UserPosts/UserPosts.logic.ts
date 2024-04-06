import { useState, useEffect } from "react";
import {
  Post,
  fetchPosts,
  createPost,
  deletePost,
} from "../../services/PostsService";

export function useUserPosts() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetchPosts(setPosts);
  }, []);

  const onPostSubmit = async (post: Post) => {
    await createPost(post);
    await fetchPosts(setPosts);
  };

  const onPostDelete = async (id?: number) => {
    if (id) {
      await deletePost(id);
      await fetchPosts(setPosts);
    }
  };

  return {
    onPostSubmit,
    onPostDelete,
    posts,
  };
}
