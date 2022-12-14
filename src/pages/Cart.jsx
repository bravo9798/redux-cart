import React from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import {
  cartDecrease,
  cartIncrease,
  remove
} from "../redux/feature/cartSlice";
import { useEffect } from "react";

function Cart() {
  const dispatch = useDispatch();
  const { totalAmount, items } = useSelector((state) => state.cart);

  localStorage.setItem("cartItems",JSON.stringify(items))

  const savedCartItems=localStorage.getItem("cartItems",items);

  // console.log(JSON.stringify(savedCartItems),"savedCartItems")
  console.log(JSON.parse(savedCartItems),"savedCartItems")
  

  console.log(items, "this is final cart items");
  const listStyling = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };
  const priceSectionStyle = {
    display: "flex",
    alignItem: "center",
    justifyContent: "space-between",
    margin: "1rem",
    alignItems: "center",
  };

  const atcBtnStyling = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const pTagStylingZMargin = {
    margin: 0,
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

      {items
        .filter((item) => item.quantity > 0)
        .map((product, index) => {
          return (
            <div
              className="card"
              style={{
                width: "25%",
                margin: "2rem 1rem 1rem",
                cursor: "pointer",
              }}
              key={product.id}
            >
              <div>
                <img
                  className="card-img-top"
                  src={product.image}
                  alt={product.name}
                />
                <h5 className="card-body">{product.name}</h5>
              </div>
              <div className="price" style={priceSectionStyle}>
                <p style={{ margin: "0" }}>{product.price}</p>
                <div className="btn-group">
                  <button
                    onClick={() => dispatch(cartDecrease(product.id))}
                    className="btn btn-outline-danger"
                    disabled={product.quantity < 2}
                  >
                    -
                  </button>
                  <button className="btn btn-outline-dark" disabled>
                    {product.quantity}
                  </button>
                  <button
                    onClick={() => dispatch(cartIncrease(product.id))}
                    className={"btn btn-outline-success"}
                  >
                    +
                  </button>
                </div>
              </div>
              <button className="btn btn-danger" style={atcBtnStyling} onClick={()=>dispatch(remove(product.id))}>
                <p>
                  Cancel
                </p>
              </button>
            </div>
          );
        })}
    </div>
  );
}

export default Cart;
