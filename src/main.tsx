import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  useNavigation,
} from "react-router-dom";

import Characters from "./pages/Characters/Characters";
import { charactersLoader } from "./services/CharactersLoader/CharactersLoader";
import { characterLoader } from "./services/CharacterLoader/CharacterLoader";
import Character from "./pages/Character/Character";
import Navbar from "./components/Navbar/Navbar";
import Loading from "./components/Loading/Loading";
import Footer from "./components/Footer/Footer";

import "bootstrap/dist/css/bootstrap.css";
import "./index.css";

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
        loader: charactersLoader,
        element: <Characters />,
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
