import { productData } from "../Data/productData";
import { MdOutlineShoppingCart } from "react-icons/md";
import { useSelector,useDispatch } from "react-redux";
import {
  increase,
  decrease,
  getCartTotal,
  getCartItems
} from "../redux/feature/cartSlice";
import { useEffect } from "react";

function ProductCard() {
  const dispatch=useDispatch()
  const { items } = useSelector((state) => state.cart);
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

  // useEffect(() => {
  // dispatch(getCartItems())
  // }, [])
  

  return items.map((product, index) => {
    return (
      <div
        className="card"
        style={{ width: "25%", margin: "2rem 1rem 1rem", cursor: "pointer" }}
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
            <button onClick={()=>dispatch(decrease(product.id))} className="btn btn-outline-danger" disabled={product.quantity<1} >-</button>
            <button className="btn btn-outline-dark" disabled>
              {product.quantity}
            </button>
            <button onClick={()=>dispatch(increase(product.id))} className={"btn btn-outline-success"}>+</button>
          </div>
        </div>
        <button className="btn btn-success" style={atcBtnStyling}>
          <MdOutlineShoppingCart />
          <p  onClick={()=> dispatch(getCartTotal(product.id))} style={pTagStylingZMargin}>Add to Cart</p>
        </button>
      </div>
    );
  });
}

export default ProductCard;
