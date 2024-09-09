import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./pages/App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./pages/About.tsx";
import TanstackQuery from "./pages/TanstackQuery.tsx";
import ViewUser from "./pages/ViewUser.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

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
  {
    path: "tanstack/users/:id",
    element: <ViewUser />,
  },
]);

// Create the client
const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* Provide the queryClient 
    (just like in context to be accessible in every component inside the provider) */}
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </StrictMode>
);
