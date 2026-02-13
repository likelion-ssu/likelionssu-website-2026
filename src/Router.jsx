import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import HomePage from "./pages/HomePage";
import PartPage from "./pages/PartPage";
import ProjectPage from "./pages/ProjectPage";
import AboutUsPage from "./pages/AboutUsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/about", element: <AboutUsPage /> },
      { path: "/part", element: <PartPage /> },
      { path: "/project", element: <ProjectPage /> },
      { path: "/project/:id", element: <ProjectPage /> },
    ],
  },
]);

export default router;
