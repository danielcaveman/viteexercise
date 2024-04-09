import { baseURL } from "../constants/constants";
import { client } from "./AuthService";

export type Comment = {
  id?: number;
  postId?: number;
  content: string;
};

type FetchCommentResponse = {
  comments: Comment[];
};

export async function fetchComments({
  postId,
}: {
  postId: string;
}): Promise<FetchCommentResponse | undefined> {
  try {
    const response = await client.get(`${baseURL}/posts/${postId}/comments`);

    const comments = response.data;

    const data: FetchCommentResponse = {
      comments: comments.items,
    };

    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function createComment(comment: Comment) {
  try {
    await client.post(`${baseURL}/comments`, comment);
  } catch (error) {
    console.error(error);
  }
}

export async function deleteComment(commentId: number) {
  try {
    await client.delete(`${baseURL}/comments/${commentId}`);
  } catch (error) {
    console.error(error);
  }
}
