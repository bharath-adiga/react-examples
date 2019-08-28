import React, { Component } from "react";

import productList from "../../productList";

import Item from "./item.jsx";

import "./styles.css";

import { connect } from "react-redux";

class ProductList extends Component {
  constructor(props) {
    super(props);
  }

  getInventory() {
    return productList.map(({ id, name, price, images }) => (
      <Item
        key={id}
        productId={id}
        name={name}
        price={price}
        desc={images[0].src}
      />
    ));
  }

  render() {
    return (
      <div className="App">
        <h1>Select Products</h1>

        <div>{this.getInventory()}</div>
      </div>
    );
  }
}

export default ProductList;
