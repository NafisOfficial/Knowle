import {
    createBrowserRouter,
  } from "react-router-dom";
import Home from "../Home/Home";
import MainPage from "../MainPage/MainPage";
import Login from "../Shared/Login/Login";
import Register from "../Shared/Register/Register";


  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>,
      children: [{
        path: "/",
        element: <MainPage></MainPage>
      }
    ]
    },
    {
      path:'/login',
      element:<Login></Login>
    },
    {
      path:'/register',
      element:<Register></Register>
    }
  ]);