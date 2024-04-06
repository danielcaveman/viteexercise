import { Box, Button, TextField, Tooltip, Typography } from "@mui/material";
import { ChangeEvent } from "react";
import { Link } from "react-router-dom";
import { signIn } from "../../services/AuthService";
import { useLogin } from "./Login.logic";

function Login() {
  const { navigate, setUser, username, setUserName, password, setPassword } =
    useLogin();

  return (
    <>
      <Box
        component="form"
        m={2}
        gap={2}
        display="flex"
        flexDirection="column"
        alignItems="stretch"
        noValidate
        autoComplete="off"
      >
        <Typography variant="h5" component="h2">
          Sign in
        </Typography>

        <TextField
          error={!username}
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            setUserName(event.target.value)
          }
          id="username"
          label="Username"
          value={username}
        />
        <TextField
          error={!password}
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            setPassword(event.target.value)
          }
          id="password"
          label="Password"
          type="password"
          value={password}
        />
      </Box>
      <Box ml={2}>
        <Tooltip title="All the fields are required">
          <span>
            <Button
              onClick={() => signIn({ username, password, setUser, navigate })}
              variant="contained"
              disabled={!username || !password}
            >
              Sign in
            </Button>
          </span>
        </Tooltip>
      </Box>
      <Box m={2}>
        <Typography variant="subtitle1" component="p">
          <Link to="/register">Create your account here</Link>
        </Typography>
      </Box>
    </>
  );
}

export default Login;
