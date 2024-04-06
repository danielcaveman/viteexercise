import { Dispatch, SetStateAction } from "react";

const apiUrl = "http://13.40.200.183";
const userId = 1;
const limit = 5;

const headers = {
  "Content-Type": "application/json",
  Authorization: `token-valid-for-${userId}`,
};

export type Post = {
  id?: number;
  title: string;
  content: string;
};

type FetchPost = {
  setPosts: Dispatch<SetStateAction<Post[]>>;
  page: number;
  setTotalPages: Dispatch<SetStateAction<number>>;
};

export async function fetchPosts({ setPosts, page, setTotalPages }: FetchPost) {
  try {
    const offset = page > 1 ? limit * (page - 1) : 0;
    const response = await fetch(
      `${apiUrl}/users/${userId}/posts?limit=${limit}&offset=${offset}`,
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
