import React from "react";
import { createHashRouter, RouterProvider } from "react-router-dom";
import MainLayout from "../../../Project2/src/Layout/MainLayout";
import Home from "../Screen/Home";
import Blog from "../Screen/Blog";
import AddProduct from "../Screen/ProductForm";
import Productdeatils from "../Screen/Productdeatils";
import Cart from "../Screen/Cart";

// Define the router configuration
const router = createHashRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {index: true, element: <Home /> },
      {path:'productdeatils/:id',element:<Productdeatils/>},
      {path:'cart',element:<Cart/>},
      {path: 'Addproduct', element: <AddProduct /> },
      {path: 'Blog', element: <Blog /> },
    ],
  },
]);

// Router component
const Approuter: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default Approuter;
