import React from "react";
import { Link } from "react-router-dom";
import "./item.css";
export const ProductImage = props => {
  return (
    <Link to={"/product/" + props.productId}>
      <img className="circular-image" src={props.imgSrc} />{" "}
    </Link>
  );
};

export default ProductImage;
