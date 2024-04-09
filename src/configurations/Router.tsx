import { createBrowserRouter } from "react-router-dom";
import Registration from "../pages/Registration/Registration";
import UserPosts from "../pages/UserPosts/UserPosts";
import Login from "../pages/Login/Login";
import Comments from "../pages/Comments/Comments";

export const router = createBrowserRouter([
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
  {
    path: "comments/:postId",
    element: <Comments />,
  },
]);
