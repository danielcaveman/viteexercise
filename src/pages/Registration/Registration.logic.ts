import { useState } from "react";

export function useRegistration() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [error, setError] = useState<string | undefined>(undefined);

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
  };
}
