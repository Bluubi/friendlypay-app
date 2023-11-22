import "reflect-metadata";
import "./core/di.ts";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./core/routes.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router}></RouterProvider>,
);
