import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Header from "./components/Header/Header";
import Layout from "./components/Layout/Layout";
import UserPosts from "./pages/UserPosts/UserPosts";
import Login from "./pages/Login/Login";
import Registration from "./pages/Registration/Registration";
import { AuthContext } from "./contexts/AuthContext/AuthContext";
import { useState } from "react";

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
  const [user, setUser] = useState(null);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <Header />
      <Layout>
        <RouterProvider router={router} />
      </Layout>
    </AuthContext.Provider>
  );
}

export default App;
