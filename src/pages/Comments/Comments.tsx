import { Button, TextField, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";
import { useComments } from "./Comments.logic";
import { ChangeEvent } from "react";
import { createComment } from "../../services/CommentsService";

function Comments() {
  const { comment, setComment, postId } = useComments();
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
        <TextField
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            setComment(event.target.value)
          }
          id="comment"
          label="Comment"
          value={comment}
        />
        <Button
          onClick={() =>
            postId &&
            createComment({ content: comment, postId: parseInt(postId) })
          }
        >
          Add Comment
        </Button>
        <Button onClick={() => navigate("/")}>Back to posts</Button>
      </Box>
    </>
  );
}

export default Comments;
