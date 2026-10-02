import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import MainLayout from "./mainLayout";
import Home from "../pages/Home";
import ProductPage from "../pages/ProductPage";
import ProductDetail from "../pages/ProductDetail";
import NotFoundPage from "../pages/NotFoundPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "products",
                element: <ProductPage />,
            },
            {
                path: "products/:id",
                element: <ProductDetail />,
            },
        ],
    },
    {
        path: "*",
        element: <NotFoundPage />,
    },
]);

const App: React.FC = () => {
    return <RouterProvider router={router} />;
};

export default App;