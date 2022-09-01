import React from "react";
import classes from "./Product.module.css";

import { useStateValue } from "../../stateProvider/StateProvider";

const Product = ({ id, title, price, rating, image }) => {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        id,
        title,
        price,
        rating,
        image,
      },
    });
  };

  return (
    <div className={classes.product}>
      <div className={classes.product__info}>
        <p>{title}</p>
        <p className={classes.product__price}>
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className={classes.product__rating}>
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i}>⭐</p>
            ))}
        </div>
      </div>
      <img src={image} alt="" />
      <button onClick={addToBasket}>Add To Basket</button>
    </div>
  );
};

export default Product;
