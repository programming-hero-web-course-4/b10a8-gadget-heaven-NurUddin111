import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./component/Root/Root";
import Home from "./component/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <div>KIccuu Naiii</div>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        children: [
          {
            path: "/all-products",
            element: <Home></Home>,
          },
          {
            path: "/android",
            element: <Home></Home>,
          },
          {
            path: "/iphone",
            element: <Home></Home>,
          },
          {
            path: "/macbook",
            element: <Home></Home>,
          },
          {
            path: "/accessories",
            element: <Home></Home>,
          },
        ],
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
