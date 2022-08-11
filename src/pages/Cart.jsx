import React from "react";

function Cart() {
  const listStyling = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };

  return (
    <div
      className="container"
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h3 style={{ margin: "2rem 0" }}>Cart</h3>
      <ul className="list-group" style={{ width: "40vw" }}>
        <li className="list-group-item" style={listStyling}>
          <p style={{ color: "green" }}>Total</p>
          <p style={{ color: "green" }}>{0}</p>
        </li>
      </ul>
    </div>
  );
}

export default Cart;
