import { RegisterPage } from "../../pages/RegisterPage/RegisterPage";
import { HomePage } from "../../pages/HomePage/HomePage";

export const routerStorage = [
  {
    path: "/",
    element: <HomePage />,
    errorElement: "error",
  },
  {
    path: "/signup",
    element: <RegisterPage />,
    errorElement: "error",
  },
];
