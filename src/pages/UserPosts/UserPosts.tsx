import Form from "../../components/PostForm/PostForm";
import Post from "../../components/Post/Post";
import { useUserPosts } from "./UserPosts.logic";
import { Pagination } from "@mui/material";

function UserPosts() {
  const { onPostSubmit, onPostDelete, posts, totalPages } = useUserPosts();

  return (
    <>
      <Form onSubmit={onPostSubmit} />

      {posts.map(({ id, title, content }) => (
        <Post
          onDelete={onPostDelete}
          key={id}
          id={id}
          title={title}
          content={content}
        />
      ))}

      {!!posts.length && <Pagination count={totalPages} size="small" />}
    </>
  );
}

export default UserPosts;
