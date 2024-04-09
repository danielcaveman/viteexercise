import { Dispatch, SetStateAction } from "react";
import { baseURL, headers } from "../constants/constants";
import { NavigateFunction } from "react-router-dom";
import axios, { AxiosError } from "axios";
import { User } from "../contexts/AuthContext/AuthContext";

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

    client.defaults.headers.common[
      "Authorization"
    ] = `token-valid-for-${data.id}`;

    await setUser(data);
    navigate("/");
  } catch (error) {
    if (error instanceof AxiosError) {
      setError(error.response?.data.errors[0].detail);
    } else {
      setError("Login failed");
    }
  }
}

export async function signUp({
  username,
  password,
  firstName,
  lastName,
  setError,
  setUser,
}: Props & {
  setError: Dispatch<SetStateAction<string | undefined>>;
  setUser: Dispatch<SetStateAction<User | undefined>>;
}) {
  try {
    const response = await client.post(`${baseURL}/users`, {
      username,
      password,
      firstName,
      lastName,
    });

    const data = response.data;

    if (!data.errors) {
      setUser(data);
    }
  } catch (error) {
    if (error instanceof AxiosError) {
      setError(error.response?.data.errors[0].detail);
    } else {
      setError("Registration failed");
    }
  }
}
