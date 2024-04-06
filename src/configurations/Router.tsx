import { Login } from "@mui/icons-material";
import { createBrowserRouter } from "react-router-dom";
import Registration from "../pages/Registration/Registration";
import UserPosts from "../pages/UserPosts/UserPosts";

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
]);
