import { Dispatch, SetStateAction, createContext } from "react";

export type User = {
  accessToken: string;
  created: string;
  firstName: string;
  id: number;
  lastName: string;
  username: string;
};

type AuthContext = {
  user: User | null;
  setUser: Dispatch<SetStateAction<null>>;
};

export const AuthContext = createContext<AuthContext>({
  user: null,
  setUser: () => {},
});
