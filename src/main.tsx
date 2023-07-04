import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/Home";
import { characterCardLoader as characterCardLoader } from "./services/CharachterCardLoader/CharacterCardLoader";
import { characterLoader as characterLoader } from "./services/CharacterLoader/CharacterLoader";
import Character from "./pages/Character/Character";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

const Layout = () => {
  return (
    <div className="app">
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

const queryParameters = new URLSearchParams(window.location.search);
function GetParameters(queryParameters: URLSearchParams) {
  const name = queryParameters.get("search");

  return name;
}

const name = GetParameters(queryParameters);

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        loader: characterCardLoader,
        element: <Home />,
      },
      {
        path: "/character/:id",
        loader: characterLoader,
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
