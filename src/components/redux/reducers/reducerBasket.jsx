const initialState = {
  basket: JSON.parse(localStorage.getItem("basket")) || [],
};

export const ReducerBasket = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      let findBasket = state.basket.find(
        (item) => item.id === action.payload.id
      );
      if (findBasket) {
        console.log("bar");
      } else {
        localStorage.setItem(
          "basket",
          JSON.stringify([...state.basket, action.payload])
        );
        return { ...state, basket: [...state.basket, action.payload] };
      }
    case "DELETE_BASKET":
      let delBasket = state.basket.filter((el) => el.id !== action.payload);
      localStorage.setItem("basket", JSON.stringify(delBasket));
      return { ...state, basket: delBasket };
    case "QUANTITY_INCREMENT":
      let change = state.basket.map((el) =>
        el.id === action.payload ? { ...el, quantity: el.quantity + 1 } : el
      );
      localStorage.setItem("basket", JSON.stringify(change));
      return {
        ...state,
        basket: change,
      };
    case "QUANTITY_DICREMENT":
      let dicChange = state.basket.map((el) =>
        el.id === action.payload
          ? { ...el, quantity: el.quantity > 1 ? el.quantity - 1 : 1 }
          : el
      );
      localStorage.setItem("basket", JSON.stringify(dicChange));
      return {
        ...state,
        basket: dicChange,
      };
    case "REMOVE_ALL":
      localStorage.removeItem("basket");
      return { ...state, basket: [] };
    default:
      return state;
  }
};
