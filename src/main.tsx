import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  useNavigation,
} from "react-router-dom";
import Characters from "./pages/Characters/Characters";
import Character from "./pages/Character/Character";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import "./index.css";
import Loading from "./components/Loading/Loading";

const Layout = () => {
  const navigation = useNavigation();

  return (
    <div className="app">
      {navigation.state === "loading" && <Loading></Loading>}
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Characters />,
      },
      {
        path: "/character/:id",
        element: <Character />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
