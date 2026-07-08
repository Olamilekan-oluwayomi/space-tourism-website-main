import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./styles/index.css";
import App from "./App.jsx";
import Crew from "./pages/Crew.jsx";
import Technology from "./pages/Technology.jsx";
import HomePage from "./pages/HomePage.jsx";
import DestinationPage from "./pages/DestinationPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "destination", element: <DestinationPage /> },
      { path: "crew", element: <Crew /> },
      { path: "technology", element: <Technology /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
