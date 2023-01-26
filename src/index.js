import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import Beranda from "./components/Beranda";
import Portofolio from "./components/Portofolio";
import Kontak from "./components/Kontak";

const root = ReactDOM.createRoot(document.getElementById("root"));
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/Beranda",
    element: <Beranda />,
  },
  {
    path: "/Portofolio",
    element: <Portofolio />,
  },
  {
    path: "/Kontak",
    element: <Kontak />,
  },
]);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
