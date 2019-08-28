import ProductList from "../components/ProductList";
import ProductDetails from "../components/ProductDetails";

export default [
  {
    component: ProductList,
    path: "/productsList",
    exact: true
  },
  {
    component: ProductDetails,
    path: "/product/:productId"
  }
];
