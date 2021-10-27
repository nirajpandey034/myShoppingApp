import React from "react";
import'../Styles/IncDecButton.css';

//will get item name and price and will return row
function CartModalRow(props) {
  return (
    <div>
      <div style={{ display: "flex" }}>
        <button className="IncDecButton">-</button>
        <p>{props.quantity}</p>
        <button className="IncDecButton">+</button>
        <p style={{ marginRight: "auto" }}>{props.name}</p>
        <p style={{ marginLeft: "auto" }}>Rs.{props.price}</p>
      </div>
      <hr />
    </div>
  );
}

export default CartModalRow;
