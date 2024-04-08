import { Dispatch, SetStateAction } from "react";
import { baseURL, headers } from "../constants/constants";
import { NavigateFunction } from "react-router-dom";
import axios from "axios";

export const client = axios.create({
  baseURL,
});

client.defaults.headers.common["Authorization"] = headers.Authorization;

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
    const response = await client.post(`${baseURL}/users/auth`, {
      username,
      password,
    });
    const data = response.data;

    if (data.errors) {
      const error: string = data.errors[0].detail || "Failed to authenticate";
      setError(error);
      throw new Error(error);
    }

    client.defaults.headers.common[
      "Authorization"
    ] = `token-valid-for-${data.id}`;

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
    const response = await client.post(`${baseURL}/users`, {
      username,
      password,
      firstName,
      lastName,
    });

    const data = response.data;

    if (data.errors) {
      const error: string = data.errors[0].detail || "Failed to authenticate";
      setError(error);
      throw new Error(error);
    }
  } catch (error) {
    console.error(error);
  }
}
