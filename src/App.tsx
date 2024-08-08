import { useRoutes } from "react-router-dom";

import ProductDetail from "./pages/ProductDetail";

import LayoutClient from "./layouts/LayoutClient";
import Login from "./pages/Login";
import LayoutAdmin from "./layouts/LayoutAdmin";
import Admin from "./pages/Admin";
import Homepage from "./pages/Hompage";
import Register from "./pages/register";

const routeConfig = [
  {
    path: "admin",
    element: <LayoutAdmin />,
    children: [
      {
        path: "",
        element: <Admin />,
      },
    ],
  },
  {
    path: "/",
    element: <LayoutClient />,
    children: [
      { path: "/", element: <Homepage /> },
      { path: "product/:id", element: <ProductDetail /> },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
];

function App() {
  const routes = useRoutes(routeConfig);

  return <main>{routes}</main>;
}

export default App;
