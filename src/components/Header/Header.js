import React from "react";
import classes from "./Header.module.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { NavLink } from "react-router-dom";
import { useStateValue } from "../../stateProvider/StateProvider";

const Header = () => {
  const [{ basket }] = useStateValue();
  return (
    <div className={classes.header}>
      <NavLink to="/">
        <img
          className={classes.header__logo}
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="amazon Logo"
        />
      </NavLink>
      <div className={classes.header__search}>
        <input type="text" className={classes.header__searchInput} />
        <SearchIcon className={classes.header__searchIcon} />
      </div>
      <div className={classes.header__nav}>
        <NavLink to="login">
          <div className={classes.header__option}>
            <span className={classes.header__optionLineOne}>Hello Guest</span>
            <span className={classes.header__optionLineTwo}>SignIn</span>
          </div>
        </NavLink>

        <div className={classes.header__option}>
          <span className={classes.header__optionLineOne}>Return</span>
          <span className={classes.header__optionLineTwo}>Order</span>
        </div>
        <div className={classes.header__option}>
          <span className={classes.header__optionLineOne}>Your</span>
          <span className={classes.header__optionLineTwo}>Prime</span>
        </div>

        <div className={classes.header__optionBasket}>
          <NavLink to="checklist">
            <ShoppingBasketIcon
              className={`classes.header__basketCount  header__optionLineTwo`}
            />
          </NavLink>
          <span>{basket.length}</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
