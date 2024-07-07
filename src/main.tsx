import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Form from "./pages/Form.tsx";
import Rated from "./pages/Rated.tsx";
import Home from "./pages/Home.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Movie from "./pages/Movie.tsx";
import TvShow from "./pages/TvShow.tsx";
// import { AuthProvider } from './useContext/context.ts'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/signup",
        element: <Form />,
      },
      {
        path: "/rated",
        element: <Rated />,
      },
      {
        path: "/",
        element: <Home />,
      },
      {
        path:"/movie/:id",
        element:<Movie/>
      },
      {
        path:"/tv/:id",
        element:<TvShow/>
      },
    ],
  },
]);

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
     <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>,
);

