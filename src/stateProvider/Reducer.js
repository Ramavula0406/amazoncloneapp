export const initialState = {
  basket: [],
};

export const getBasketTotal = (basket) => {
  basket?.reduce((amount, item) => item.price + amount, 0);
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        basket: [...state.basket, action.payload],
      };
    case "REMOVE_FROM_BASKET":
      let index = state.basket.findIndex((prod) => prod.id === action.payload);
      let newBasket = [...state.basket];
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn("Can't Delete Product");
      }
      return {
        ...state,
        basket: newBasket,
      };
    default:
      return state;
  }
};
