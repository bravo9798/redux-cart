import React from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { getCartTotal, getCartItems } from "../redux/feature/cartSlice";
import { useEffect } from "react";

function Cart() {
  const dispatch = useDispatch();
  const { totalAmount, items } = useSelector((state) => state.cart);

  // useEffect(() => {
  //   dispatch(getCartTotal());
  // }, []);

  console.log(items, "this is cart items");
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
          <p style={{ color: "green" }}>{totalAmount}</p>
        </li>
      </ul>
    </div>
  );
}

export default Cart;
