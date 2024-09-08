import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./pages/App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./pages/About.tsx";
import TanstackQuery from "./pages/TanstackQuery.tsx";

const router = createBrowserRouter([
  {
    index: true,
    element: <App />,
  },
  {
    path: "about",
    element: <About />,
  },
  {
    path: "tanstack",
    element: <TanstackQuery />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
