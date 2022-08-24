import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
function Nav() {
  // const {totalCount}=useSelector((state)=>state.cart)
  const { totalCount, items ,mainCartItems,shownCartItems} = useSelector((state) => state.cart);
  const navStyling = {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#000000",
    color: "#FFFFFF",
    height: "10vh",
    position: "sticky",
    top: 0,
    zIndex: 2,
  };
  const ListStyling = {
    display: "flex",
    justifyContent: "space-around",
    width: "50%",
    listStyle: "none",
  };
  console.log(shownCartItems,"mainCartItems")
  console.log(mainCartItems.length,"shownCartItems")
  const linkStyling = { color: "white", textDecoration: "none" };
  // const length=items
  let uniqItems=[...new Set(shownCartItems)]
  console.log(uniqItems,"uniqItems")
  return (
    <nav style={navStyling}>
      <Link to={"/"} style={linkStyling}>
        <h3>Home</h3>
      </Link>
      <ul style={ListStyling}>
        <Link to={"shop"} style={linkStyling}>
          <li>Shop</li>
        </Link>
        <Link to={"Cart"} style={linkStyling}>
          <li>Cart {mainCartItems.length}</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
