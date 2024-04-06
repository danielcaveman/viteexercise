import { Dispatch, SetStateAction } from "react";

const apiUrl = "http://13.40.200.183";
const userId = 1;

const headers = {
  "Content-Type": "application/json",
  Authorization: `token-valid-for-${userId}`,
};

export type Post = {
  id?: number;
  title: string;
  content: string;
};

export async function fetchPosts(callback: Dispatch<SetStateAction<Post[]>>) {
  try {
    const response = await fetch(`${apiUrl}/users/${userId}/posts`, {
      method: "GET",
      headers,
    });

    const posts = await response.json();

    callback(posts.items);
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
