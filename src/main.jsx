import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./component/ErrorPage/ErrorPage";
import Root from "./component/Root/Root";
import Home from "./component/HomePage/Home/Home";
import ProductDetails from "./component/HomePage/ProductDetails/ProductDetails";
import Dashboard from "./component/DashboardPage/Dashboard/Dashboard";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "all-products",
        element: <Home></Home>,
      },
      {
        path: "android",
        element: <Home></Home>,
      },
      {
        path: "iphone",
        element: <Home></Home>,
      },
      {
        path: "macbook",
        element: <Home></Home>,
      },
      {
        path: "accessories",
        element: <Home></Home>,
      },
      {
        path: ":product_title",
        loader: () => fetch("products.json"),
        element: <ProductDetails></ProductDetails>,
      },
      {
        path: "android/:product_title",
        loader: () => fetch("products.json"),
        element: <ProductDetails></ProductDetails>,
      },
      {
        path: "iphone/:product_title",
        loader: () => fetch("products.json"),
        element: <ProductDetails></ProductDetails>,
      },
      {
        path: "macbook/:product_title",
        loader: () => fetch("products.json"),
        element: <ProductDetails></ProductDetails>,
      },
      {
        path: "accessories/:product_title",
        loader: () => fetch("products.json"),
        element: <ProductDetails></ProductDetails>,
      },
      {
        path: "dash-board",
        element: <Dashboard></Dashboard>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
    <ToastContainer
      position="top-center"
      autoClose={2500}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover={false}
      theme="dark"
    />
  </StrictMode>
);
