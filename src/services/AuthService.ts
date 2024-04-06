import { apiUrl, headers } from "../constants/constants";

type Props = {
  username: string;
  password: string;
};

export async function signIn({ username, password }: Props) {
  try {
    await fetch(`${apiUrl}/users/auth`, {
      method: "POST",
      headers,
      body: JSON.stringify({ username, password }),
    });
  } catch (error) {
    console.error(error);
  }
}
