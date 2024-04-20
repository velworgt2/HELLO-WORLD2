import "./index.css";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { routerProvider } from "./router/RouterProvider/RouterProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={routerProvider} />
);
