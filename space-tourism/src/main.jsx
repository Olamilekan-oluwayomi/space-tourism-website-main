import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./styles/index.css";
import App from "./App.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        lazy: async () => {
          const { default: HomePage } = await import("./pages/HomePage.jsx");
          return { Component: HomePage };
        },
      },
      {
        path: "destination",
        lazy: async () => {
          const { default: DestinationPage } =
            await import("./pages/DestinationPage.jsx");
          return { Component: DestinationPage };
        },
      },
      {
        path: "crew",
        lazy: async () => {
          const { default: Crew } = await import("./pages/Crew.jsx");
          return { Component: Crew };
        },
      },
      {
        path: "technology",
        lazy: async () => {
          const { default: Technology } =
            await import("./pages/Technology.jsx");
          return { Component: Technology };
        },
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
