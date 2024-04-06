import { Button, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Post } from "../../pages/UserPosts/UserPosts.logic";

type Props = {
  onSubmit: (post: Post) => void;
};

export default function Form({ onSubmit }: Props) {
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

        <TextField id="title" label="Title" defaultValue="" />
        <TextField
          id="description"
          label="Description"
          defaultValue=""
          multiline
          minRows={4}
          maxRows={4}
        />
      </Box>
      <Box ml={2}>
        <Button
          onClick={() =>
            onSubmit({ title: "New post", content: "New content" })
          }
          variant="contained"
        >
          Post
        </Button>
      </Box>
    </>
  );
}
