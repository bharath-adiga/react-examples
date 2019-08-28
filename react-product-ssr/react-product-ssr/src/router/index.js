import React from "react";
import { BrowserRouter } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import Routes from "./Routes";
import NavHeader from "../components/header";
import NavFooter from "../components/footer";

export default () => {
  return (
    <BrowserRouter>
      <div>
        <NavHeader />
        {renderRoutes(Routes)}
        <NavFooter />
      </div>
    </BrowserRouter>
  );
};
