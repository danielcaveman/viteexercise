import { baseURL } from "../constants/constants";
import { User } from "../contexts/AuthContext/AuthContext";
import { client } from "./AuthService";

const limit = 5;

export type Post = {
  id?: number;
  title: string;
  content: string;
};

type FetchPost = {
  page: number;
  user: User | null;
};

export async function fetchPosts({
  page,
  user,
}: FetchPost): Promise<{ posts: Post[]; totalPages: number } | undefined> {
  try {
    if (!user) {
      return;
    }

    const offset = page > 1 ? limit * (page - 1) : 0;
    const response = await client.get(
      `${baseURL}/users/${user.id}/posts?limit=${limit}&offset=${offset}`
    );

    const data:
      | {
          posts: Post[];
          totalPages: number;
        }
      | undefined = {
      posts: response.data.items,
      totalPages: response.data.totalCount,
    };

    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function createPost(post: Post) {
  try {
    await client.post(`${baseURL}/posts`, post);
  } catch (error) {
    console.error(error);
  }
}

export async function deletePost(id: number) {
  try {
    await client.delete(`${baseURL}/posts/${id}`);
  } catch (error) {
    console.error(error);
  }
}
