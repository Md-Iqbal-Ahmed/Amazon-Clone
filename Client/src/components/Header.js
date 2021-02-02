import React from "react";
import "./Header.css";
import image from "../images/amazon.png";
import Search from "@material-ui/icons/Search";
import Cart from "@material-ui/icons/AddShoppingCart";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "../Firebase";

const Header = () => {
  const [{ basket, user }, dispatch] = useStateValue();

  const authenticationHandler = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <div className="header">
      <Link to="/">
        <img src={image} className="header_logo" />
      </Link>

      <div className="header_search">
        <input className="header_searchInput" type="text" />
        <Search className="header_iconButton" />
      </div>
      <div className="header_nav">
        <div className="header_option">
          <span className="header_optionOne">
            {user ? user?.email : "hello Guest"}
          </span>
          <Link to={!user && "/login"}>
            <span
              onClick={authenticationHandler}
              className="header_optionTwo"
              style={{ color: "white" }}
            >
              {user ? "Sign Out" : "Sign In"}
            </span>
          </Link>
        </div>

        <div className="header_option">
          <span className="header_optionOne">Returns</span>
          <span className="header_optionTwo">& Orders</span>
        </div>
        <div className="header_option">
          <span className="header_optionOne">Your</span>
          <span className="header_optionTwo">Prime</span>
        </div>
        <Link to="/checkout">
          <div className="header_optionBusket">
            <Cart />
            <span className="header_optionOne header_optionTwo header_busketcount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
