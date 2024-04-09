import { Button, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";

function Comments() {
  const navigate = useNavigate();

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
          Comments
        </Typography>
        <Button onClick={() => navigate("/")}>Back to posts</Button>
      </Box>
    </>
  );
}

export default Comments;
