import { Dispatch, SetStateAction } from "react";
import { apiUrl, headers } from "../constants/constants";
import { NavigateFunction } from "react-router-dom";

type Props = {
  username: string;
  password: string;
  firstName?: string;
  lastName?: string;
};

export async function signIn({
  username,
  password,
  setUser,
  setError,
  navigate,
}: Props & {
  setUser: Dispatch<SetStateAction<null>>;
  setError: Dispatch<SetStateAction<string | undefined>>;
  navigate: NavigateFunction;
}) {
  try {
    const response = await fetch(`${apiUrl}/users/auth`, {
      method: "POST",
      headers,
      body: JSON.stringify({ username, password }),
    });

    const data = await response.json();

    if (data.errors) {
      const error: string = data.errors[0].detail || "Failed to authenticate";
      setError(error);
      throw new Error(error);
    }

    await setUser(data);
    navigate("/");
  } catch (error) {
    console.error(error);
  }
}

export async function signUp({
  username,
  password,
  firstName,
  lastName,
  setError,
}: Props & {
  setError: Dispatch<SetStateAction<string | undefined>>;
}) {
  try {
    const response = await fetch(`${apiUrl}/users`, {
      method: "POST",
      headers,
      body: JSON.stringify({ username, password, firstName, lastName }),
    });

    const data = await response.json();

    if (data.errors) {
      const error: string = data.errors[0].detail || "Failed to authenticate";
      setError(error);
      throw new Error(error);
    }
  } catch (error) {
    console.error(error);
  }
}
