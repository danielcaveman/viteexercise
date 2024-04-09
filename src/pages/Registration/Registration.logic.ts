import { useState } from "react";
import { User } from "../../contexts/AuthContext/AuthContext";

export function useRegistration() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [error, setError] = useState<string | undefined>(undefined);
  const [user, setUser] = useState<User | undefined>(undefined);

  return {
    username,
    setUserName,
    password,
    setPassword,
    firstName,
    setFirstName,
    lastName,
    setLastName,
    error,
    setError,
    setUser,
    user,
  };
}
