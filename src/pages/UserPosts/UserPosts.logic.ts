import { useState, useEffect } from "react";
import { fetchAPI } from "../../services/Requests";

export type Post = {
  id?: number;
  title: string;
  content: string;
};

export function useUserPosts() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetchAPI(setPosts);
  }, []);

  const createPost = (post: Post) => {
    console.log(post);
  };

  return {
    createPost,
    posts,
  };
}
