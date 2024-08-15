import { createBrowserRouter } from "react-router-dom";
import Login from "../Pages/Login/Login";
import Root from "../Layout/Root";
import Register from "../Pages/Register/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/login",
        element: <Register/>
      }
    ],
  },
]);

export default router;
