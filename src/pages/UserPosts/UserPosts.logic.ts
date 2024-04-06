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

  const onPostSubmit = (post: Post) => {
    createPost(post);
  };

  const onPostDelete = (id?: number) => {
    if (id) {
      deletePost(id);
    }
  };

  return {
    onPostSubmit,
    onPostDelete,
    posts,
  };
}
