import Form from "../../components/PostForm/PostForm";
import Post from "../../components/Post/Post";
import { useUserPosts } from "./UserPosts.logic";

function UserPosts() {
  const { onPostSubmit, onPostDelete, posts } = useUserPosts();

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
    </>
  );
}

export default UserPosts;
