import { Box } from "@mui/material";
import Form from "./components/Form/Form";
import Header from "./components/Header/Header";
import Post from "./components/Post/Post";
import { useEffect, useState } from "react";
import { fetchAPI } from "./services/Requests";

type Post = {
  id: number;
  title: string;
  content: string;
};

function App() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetchAPI(setPosts);
  }, []);

  return (
    <>
      <Header />
      <Box margin="0 auto" maxWidth={600}>
        <Form />

        {posts.map(({ id, title, content }) => (
          <Post key={id} title={title} description={content} />
        ))}
      </Box>
    </>
  );
}

export default App;
