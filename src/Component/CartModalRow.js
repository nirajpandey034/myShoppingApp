import React from "react";

//will get item name and price and will return row
function CartModalRow(props) {
  return (
    <div>
      <div style={{ display: "flex" }}>
        <p style={{ marginRight: "auto" }}>{props.name} ({props.quantity})</p>
        <p style={{ marginLeft: "auto" }}>Rs.{props.price}</p>
      </div>
      <hr />
    </div>
  );
}

export default CartModalRow;
