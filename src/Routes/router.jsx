import {
    createBrowserRouter
  } from "react-router-dom";
import MainLayOut from "../Components/MainLayOut/MainLayOut";
import Home from "../Components/Home/Home";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayOut/>,
      children: [
        {
          path: '/',
          element: <Home/>
        }
      ]
    },
  ]);

export default router;