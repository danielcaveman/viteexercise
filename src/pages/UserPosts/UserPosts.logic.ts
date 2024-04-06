import { useState, useEffect } from "react";
import { Post, fetchPosts, createPost } from "../../services/PostsService";

export function useUserPosts() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetchPosts(setPosts);
  }, []);

  const onPostSubmit = (post: Post) => {
    createPost(post);
  };

  return {
    onPostSubmit,
    posts,
  };
}
