import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext/AuthContext";
import { useContext, useState } from "react";

export function useLogin() {
  const { setUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  return {
    navigate,
    setUser,
    username,
    setUserName,
    password,
    setPassword,
  };
}
