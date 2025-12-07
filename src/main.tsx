import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createHashRouter, RouterProvider } from "react-router-dom";

import Home from "./routes/Home.tsx";
import About from "./routes/About.tsx";
import Follow from "./routes/Follow.tsx";
import Notice1 from "./routes/Notice1.tsx";
import Notice2 from "./routes/Notice2.tsx";
import Notice3 from "./routes/Notice3.tsx";
import Notice4 from "./routes/Notice4.tsx";
import Notice5 from "./routes/Notice5.tsx";

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
        path: "/notice1",
        element: <Notice1 />,
      },
      {
        path: "/notice2",
        element: <Notice2 />,
      },
      {
        path: "/notice3",
        element: <Notice3 />,
      },
      {
        path: "/notice4",
        element: <Notice4 />,
      },
      {
        path: "/notice5",
        element: <Notice5 />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
