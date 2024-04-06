import { Box, Button, TextField, Tooltip, Typography } from "@mui/material";
import { ChangeEvent, useState } from "react";
import { signUp } from "../../services/AuthService";

function Registration() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

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
          Sign up
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
        <TextField
          error={!firstName}
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            setFirstName(event.target.value)
          }
          id="firstName"
          label="First Name"
          value={firstName}
        />
        <TextField
          error={!lastName}
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            setLastName(event.target.value)
          }
          id="lastName"
          label="Last Name"
          value={lastName}
        />
      </Box>
      <Box ml={2}>
        <Tooltip title="All the fields are required">
          <span>
            <Button
              onClick={() =>
                signUp({ username, password, firstName, lastName })
              }
              variant="contained"
              disabled={!username || !password || !firstName || !lastName}
            >
              Sign up
            </Button>
          </span>
        </Tooltip>
      </Box>
    </>
  );
}

export default Registration;
