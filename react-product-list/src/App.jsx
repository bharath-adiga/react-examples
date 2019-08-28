import React, { Component } from "react";
import ProductList from "./components/ProductList";
import ProductDetails from "./components/ProductDetails";

import NavHeader from "./components/header";
import NavFooter from "./components/footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <NavHeader />
        <Route path="/productsList" component={ProductList} />
        <Route path="/product/:productId" component={ProductDetails} />

        <NavFooter />
      </div>
    );
  }
}

export default App;
