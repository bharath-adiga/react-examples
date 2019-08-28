import React, { Component } from "react";

import productList from "../../productList";

import Item from "./item";

import "./styles.css";

import { connect } from "react-redux";

class ProductList extends Component {
  state = {
    currentCat: []
  };

  getInventory() {
    const { currentCat } = this.state;

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

  buttonClasses(cat) {
    let active = false;
    const { currentCat } = this.state;

    currentCat.forEach(c => {
      if (c === cat) {
        active = true;
      }
    });

    return active ? "button active" : "button";
  }

  allButtonClasses() {
    const { currentCat } = this.state;
    return currentCat.length === 0 ? "button active" : "button";
  }

  changeCategory(cat) {
    let { currentCat } = this.state;
    let found = false;

    if (cat !== "All") {
      for (let i = 0; i < currentCat.length; i += 1) {
        if (currentCat[i] === cat) {
          found = true;
          currentCat.splice(i, 1);
        }
      }

      if (!found) {
        currentCat.push(cat);
      }
    } else {
      currentCat = [];
    }

    this.setState({
      currentCat
    });
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
