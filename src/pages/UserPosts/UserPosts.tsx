import { Box } from "@mui/material";
import { useState, useEffect } from "react";
import Form from "../../components/Form/Form";
import Post from "../../components/Post/Post";
import { fetchAPI } from "../../services/Requests";

type Post = {
  id: number;
  title: string;
  content: string;
};

function UserPosts() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetchAPI(setPosts);
  }, []);

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
