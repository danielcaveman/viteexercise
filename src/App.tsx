import Header from "./components/Header/Header";
import Layout from "./components/Layout/Layout";
import UserPosts from "./pages/UserPosts/UserPosts";

function App() {
  return (
    <>
      <Header />
      <Layout>
        <UserPosts />
      </Layout>
    </>
  );
}

export default App;
