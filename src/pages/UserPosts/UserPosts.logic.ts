import { useState, useEffect } from "react";
import { fetchAPI } from "../../services/Requests";

type Post = {
  id: number;
  title: string;
  content: string;
};

export function useUserPosts() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetchAPI(setPosts);
  }, []);

  return {
    posts,
  };
}
