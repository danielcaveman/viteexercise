import { baseURL } from "../constants/constants";
import { client } from "./AuthService";

type FetchCommentResponse = {};

export async function fetchComments({
  postId,
}: {
  postId: string;
}): Promise<FetchCommentResponse | undefined> {
  try {
    const response = await client.get(`${baseURL}/posts/${postId}/comments`);

    const comments = response.data;

    return comments;
  } catch (error) {
    console.error(error);
  }
}

export async function createComment(comment: {
  postId: number;
  content: string;
}) {
  try {
    await client.post(`${baseURL}/comments`, comment);
  } catch (error) {
    console.error(error);
  }
}
