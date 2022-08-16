import { Navigate } from "react-router";
import ThrowError from "./Pages/ThrowError";
import HttpRequest from "./Pages/HttpRequest"
import Home from "./Pages/Home"

export default [
  {
    path: '/error',
    element: <ThrowError />
  },
  {
    path: '/http-request',
    element: <HttpRequest />
  },
  {
    path: '/home',
    element: <Home />
  },
  {
    path:'/',
    element:<Navigate to="/home"/>
  }
];