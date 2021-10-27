import React from "react";
import "../Styles/ProductCard.css";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import InfoSharpIcon from "@material-ui/icons/InfoSharp";
import { Tooltip } from "@material-ui/core";

import { connect } from "react-redux";

import { addToCart } from "../redux/cart/cartActions";

//for toast notification
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ProductCard(props) {
  const notify = (name) =>
    toast.success(`${name}, added to cart`, {
      autoClose: 1500,
      hideProgressBar: true,
    });

  return (
    <div className="product-card">
      <img
        src={props.path}
        style={{ height: "110px", width: "190px" }}
        alt={props.altText}
      />
      <hr />
      {props.title} <br />
      <strong>Rs. {props.price}</strong> <br />
      <hr />
      <div style={{ display: "flex" }}>
        <Tooltip title="Get Product info">
          <InfoSharpIcon
            size="small"
            color="secondary"
            style={{ marginRight: "auto" }}
          />
        </Tooltip>
        <Tooltip title="Add to Cart">
          <AddShoppingCartIcon
            size="small"
            color="secondary"
            style={{ marginLeft: "auto" }}
            onClick={() => {
              props.addToCart(props.title, props.price);
              notify(props.title);
            }}
          />
        </Tooltip>
        <ToastContainer />
      </div>
      {/* {console.log(props.prods)} */}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    prods: state.prods,
  };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addToCart: () => dispatch(addToCart(ownProps.title, ownProps.price)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ProductCard);
