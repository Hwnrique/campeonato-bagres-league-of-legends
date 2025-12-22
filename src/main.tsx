import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createHashRouter, RouterProvider } from "react-router-dom";

import Home from "./routes/Home.tsx";
import About from "./routes/About.tsx";
import Follow from "./routes/Follow.tsx";
import Notice from "./routes/Notice.tsx";



import "./index.css";
import App from "./App.tsx";

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/follow",
        element: <Follow />,
      },
      {
        path: "/notice/:id",
        element: <Notice />,
      }
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
