import { Button, Tooltip, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { ChangeEvent, useState } from "react";
import { Post } from "../../services/PostsService";

type Props = {
  onSubmit: (post: Post) => void;
};

export default function PostForm({ onSubmit }: Props) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

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
          Welcome username!
        </Typography>

        <TextField
          error={!title}
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            setTitle(event.target.value)
          }
          id="title"
          label="Title"
          value={title}
        />
        <TextField
          error={!content}
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            setContent(event.target.value)
          }
          id="description"
          label="Description"
          value={content}
          multiline
          minRows={4}
          maxRows={4}
        />
      </Box>
      <Box ml={2}>
        <Tooltip title="All the fields are required">
          <span>
            <Button
              onClick={() => onSubmit({ title, content })}
              variant="contained"
              disabled={!title || !content}
            >
              Post
            </Button>
          </span>
        </Tooltip>
      </Box>
    </>
  );
}
