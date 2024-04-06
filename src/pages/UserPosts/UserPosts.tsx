import Form from "../../components/PostForm/PostForm";
import Post from "../../components/Post/Post";
import { useUserPosts } from "./UserPosts.logic";
import Pagination from "../../components/Pagination/Pagination";

function UserPosts() {
  const { onPostSubmit, onPostDelete, posts, totalPages, page, setPage } =
    useUserPosts();

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

      {!!posts.length && (
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
