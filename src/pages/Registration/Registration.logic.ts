import { useState } from "react";

export function useRegistration() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  return {
    username,
    setUserName,
    password,
    setPassword,
    firstName,
    setFirstName,
    lastName,
    setLastName,
  };
}
