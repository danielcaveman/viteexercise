import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Header from "./components/Header/Header";
import Layout from "./components/Layout/Layout";
import UserPosts from "./pages/UserPosts/UserPosts";
import Login from "./pages/Login/Login";
import Registration from "./pages/Registration/Registration";

const router = createBrowserRouter([
  {
    path: "/",
    element: <UserPosts />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Registration />,
  },
]);

function App() {
  return (
    <>
      <Header />
      <Layout>
        <RouterProvider router={router} />
      </Layout>
    </>
  );
}

export default App;
