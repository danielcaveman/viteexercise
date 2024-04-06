import { Dispatch, SetStateAction } from "react";

const apiUrl = "http://13.40.200.183";

export async function fetchAPI<T>(callback: Dispatch<SetStateAction<T[]>>) {
  try {
    const response = await fetch(`${apiUrl}/posts`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "token-valid-for-1",
      },
    });

    const posts = await response.json();

    callback(posts.items);
  } catch (error) {
    console.error(error);
  }
}
