import React from "react";
import PropTypes from "prop-types";

import Price from "./price";
import Button from "./button";
//import {
// Segment,
// Icon,
// Label,
// Menu,
// Button,
//Input,
//Form
//} from "semantic-ui-react";
import "./item.css";
import ProductImage from "./productImage";

function Item(props) {
  const { productId, name, price, desc } = props;

  return (
    <div className="item">
      <h2>{name}</h2>
      <Price value={price} />
      <ProductImage productId={productId} imgSrc={desc} />
    </div>
  );
}

Item.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired
};

export default Item;
