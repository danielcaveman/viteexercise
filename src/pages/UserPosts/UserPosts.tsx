import { Box } from "@mui/material";
import Form from "../../components/Form/Form";
import Post from "../../components/Post/Post";
import { useUserPosts } from "./UserPosts.logic";

function UserPosts() {
  const { posts } = useUserPosts();

  return (
    <Box margin="0 auto" maxWidth={600}>
      <Form />

      {posts.map(({ id, title, content }) => (
        <Post key={id} title={title} description={content} />
      ))}
    </Box>
  );
}

export default UserPosts;
