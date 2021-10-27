import React from "react";
import'../Styles/IncDecButton.css';
import {connect} from "react-redux";
import {addToCart, removeFromCart} from "../redux/cart/cartActions"

//will get item name and price and will return row
function CartModalRow(props) {
  return (
    <div>
      <div style={{ display: "flex" }}>
        <button className="IncDecButton" onClick={()=>{props.removeFromCart(props.name, props.price)}}>-</button>
        <strong><p>{props.quantity}</p></strong>
        <button className="IncDecButton" onClick={()=>{props.addToCart(props.name, props.price)}}>+</button>
        <p style={{ marginRight: "auto" }}>{props.name}</p>
        <p style={{ marginLeft: "auto" }}>Rs.{props.price}</p>
      </div>
      <hr />
    </div>
  );
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addToCart: () => dispatch(addToCart(ownProps.name, ownProps.price)),
    removeFromCart: () => dispatch(removeFromCart(ownProps.name, ownProps.price))
  };
};
export default connect(null,mapDispatchToProps)(CartModalRow);
