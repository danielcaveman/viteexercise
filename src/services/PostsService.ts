import { Dispatch, SetStateAction } from "react";
import { apiUrl, headers } from "../constants/constants";
import { User } from "../contexts/AuthContext/AuthContext";

const limit = 5;

export type Post = {
  id?: number;
  title: string;
  content: string;
};

type FetchPost = {
  setPosts: Dispatch<SetStateAction<Post[]>>;
  page: number;
  setTotalPages: Dispatch<SetStateAction<number>>;
  user: User | null;
};

export async function fetchPosts({
  setPosts,
  page,
  setTotalPages,
  user,
}: FetchPost) {
  try {
    if (!user) {
      return;
    }

    const offset = page > 1 ? limit * (page - 1) : 0;
    const response = await fetch(
      `${apiUrl}/users/${user.id}/posts?limit=${limit}&offset=${offset}`,
      {
        method: "GET",
        headers,
      }
    );

    const posts = await response.json();

    const totalPages = Math.ceil(posts.totalCount / limit);
    setTotalPages(totalPages);
    setPosts(posts.items);
  } catch (error) {
    console.error(error);
  }
}

export async function createPost(post: Post) {
  try {
    await fetch(`${apiUrl}/posts`, {
      method: "POST",
      headers,
      body: JSON.stringify(post),
    });
  } catch (error) {
    console.error(error);
  }
}

export async function deletePost(id: number) {
  try {
    await fetch(`${apiUrl}/posts/${id}`, {
      method: "DELETE",
      headers,
    });
  } catch (error) {
    console.error(error);
  }
}
