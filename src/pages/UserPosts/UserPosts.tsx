import PostForm from "../../components/PostForm/PostForm";
import Post from "../../components/Post/Post";
import { useUserPosts } from "./UserPosts.logic";
import Pagination from "../../components/Pagination/Pagination";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

function UserPosts() {
  const { onPostSubmit, onPostDelete, posts, totalPages, page, setPage, user } =
    useUserPosts();

  if (!user) {
    return (
      <Box m={2}>
        <Typography variant="subtitle1" component="p">
          You are not logged
        </Typography>
        <Typography variant="subtitle1" component="p">
          <Link to="/login">Click here to login!</Link>
        </Typography>
      </Box>
    );
  }

  return (
    <>
      <PostForm onSubmit={onPostSubmit} />

      {posts?.map(({ id, title, content }) => (
        <Post
          onDelete={onPostDelete}
          key={id}
          id={id}
          title={title}
          content={content}
        />
      ))}

      {!!posts?.length && (
        <Pagination
          count={totalPages}
          page={page}
          onChange={(_, value) => setPage(value)}
        />
      )}
    </>
  );
}

export default UserPosts;
