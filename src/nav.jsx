import { Link } from "react-router-dom";

function Nav() {
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

  const linkStyling = { color: "white", textDecoration: "none" };

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
          <li>Cart 0</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;