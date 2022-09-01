import React from "react";
import classes from "./Cart.module.css";
import Subtotal from "./Currency";
import Product from "../Product/Product";
import { useStateValue } from "../../stateProvider/StateProvider";
import CheckoutProduct from "../Product/CheckoutProduct";

const Cart = () => {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className={classes.checkout}>
      <div className={classes.checkout__left}>
        <img
          className={classes.checkout__ad}
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt="ad"
        />
        <div className={classes.checkout__title}>
          {basket.map((prod) => (
            <CheckoutProduct
              id={prod.id}
              image={prod.image}
              title={prod.title}
              rating={prod.rating}
            />
          ))}
        </div>
      </div>
      <div className={classes.checkout__right}>
        <Subtotal />
      </div>
    </div>
  );
};

export default Cart;
