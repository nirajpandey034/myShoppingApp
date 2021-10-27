import React from "react";
import ReactDom from "react-dom";

import CardModalRow from "./CartModalRow";

import { connect } from "react-redux";

import { clearCart } from "../redux/cart/cartActions";
//this will recieve item-name, item-price array as props from dashboard

const MODAL_STYLES = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "#FFF",
  padding: "50px",
  zIndex: 1000,
  width: "60%",
};

const OVERLAY_STYLES = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0, 0, 0, .7)",
  zIndex: 1000,
};
function CartModal(props) {
  window.onkeydown = function (event) {
    if (event.keyCode === 27) {
      props.closeCart();
    }
  };
  if (!props.isOpen) return null;
  return ReactDom.createPortal(
    <>
      <div style={OVERLAY_STYLES}>
        <div style={MODAL_STYLES}>
          {props.prods.length !== 0 ? (
            <h3>Your cart is full of happiness.🎉</h3>
          ) : (
            <h3>There is nothing in your cart.</h3>
          )}

          {props.prods.map((prod) => {
            return <CardModalRow name={prod.name} quantity={prod.quantity} price={prod.price} />;
          })}
          {props.prods.length !== 0 ? (
            <>
              <div style={{ display: "flex" }}>
                <p style={{ marginRight: "auto" }}>
                  <strong>Sub Total:</strong>
                </p>
                <p style={{ marginLeft: "auto" }}>
                  <strong>Rs.{props.totalPrice}</strong>
                </p>
              </div>

              <button onClick={() => alert("Payment window will open here")}>
                Proceed to Checkout
              </button>
              <button
                onClick={() => {
                  props.clearCart();
                  props.closeCart();
                }}
              >
                Clear Cart
              </button>
              <button onClick={() => props.closeCart()}>Exit</button>
            </>
          ) : (
            <button onClick={() => props.closeCart()}>Exit</button>
          )}
        </div>
      </div>
    </>,
    document.getElementById("portal")
  );
}

const mapStateToProps = (state) => {
  return {
    prods: state.prods,
    totalPrice: state.totalPrice,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    clearCart: () => dispatch(clearCart()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartModal);
