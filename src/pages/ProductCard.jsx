import { productData } from "../Data/productData";
import { MdOutlineShoppingCart } from "react-icons/md";

function ProductCard() {
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

  return productData.map((product, index) => {
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
            <button className="btn btn-outline-danger">-</button>
            <button className="btn btn-outline-dark" disabled>
              {product.quantity}
            </button>
            <button className={"btn btn-outline-success"}>+</button>
          </div>
        </div>
        <button className="btn btn-success" style={atcBtnStyling}>
          <MdOutlineShoppingCart />
          <p style={pTagStylingZMargin}>Add to Cart</p>
        </button>
      </div>
    );
  });
}

export default ProductCard;
