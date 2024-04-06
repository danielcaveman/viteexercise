import { Box, Button, TextField, Tooltip, Typography } from "@mui/material";
import { ChangeEvent, useState } from "react";
import { signIn } from "../../services/AuthService";

function Login() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

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
          value={password}
        />
      </Box>
      <Box ml={2}>
        <Tooltip title="All the fields are required">
          <span>
            <Button
              onClick={() => signIn({ username, password })}
              variant="contained"
              disabled={!username || !password}
            >
              Sign in
            </Button>
          </span>
        </Tooltip>
      </Box>
    </>
  );
}

export default Login;
