import React, { Component } from "react";

import productList from "../../productList";

//import Item from "./item";

import "./styles.css";

class ProductDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.productId,
      currentCat: []
    };
  }

  fetchProducts() {
    console.log("Product id---2" + this.state.id);

    const product = productList.filter(item => item.id == this.state.id);
    console.log(product);
    return (
      <div className="blue-square-container ">
        <h3>{product[0].name}</h3>
        <img className="blue-square" src={product[0].images[0].src} />
        <p> {product[0].description}</p>
      </div>
    );
  }
  render() {
    return (
      <div className="App">
        <h1>Product Details</h1>
        <div>{this.fetchProducts()}</div>
      </div>
    );
  }
}

export default ProductDetails;
