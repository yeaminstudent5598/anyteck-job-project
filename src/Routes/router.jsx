import {
    createBrowserRouter
  } from "react-router-dom";
import MainLayOut from "../Components/MainLayOut/MainLayOut";
import Home from "../Components/Home/Home";
import Service from "../Components/Pages/Services/Service";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayOut/>,
      children: [
        {
          path: '/',
          element: <Home/>
        },
        {
          path: "service",
          element: <Service/>
        }
      ]
    },
  ]);

export default router;