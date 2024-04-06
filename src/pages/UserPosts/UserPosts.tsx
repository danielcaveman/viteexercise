import Form from "../../components/Form/Form";
import Post from "../../components/Post/Post";
import { useUserPosts } from "./UserPosts.logic";

function UserPosts() {
  const { createPost, posts } = useUserPosts();

  return (
    <>
      <Form onSubmit={createPost} />

      {posts.map(({ id, title, content }) => (
        <Post key={id} title={title} description={content} />
      ))}
    </>
  );
}

export default UserPosts;
