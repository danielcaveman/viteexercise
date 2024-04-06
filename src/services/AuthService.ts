import { apiUrl, headers } from "../constants/constants";

type Props = {
  username: string;
  password: string;
  firstName?: string;
  lastName?: string;
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

export async function signUp({
  username,
  password,
  firstName,
  lastName,
}: Props) {
  try {
    await fetch(`${apiUrl}/users`, {
      method: "POST",
      headers,
      body: JSON.stringify({ username, password, firstName, lastName }),
    });
  } catch (error) {
    console.error(error);
  }
}
