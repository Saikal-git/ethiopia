const initialState = {
  product: JSON.parse(localStorage.getItem("product")) || [],
  search: JSON.parse(localStorage.getItem("search")) || [],
};

export const ReducerCreate = (state = initialState, action) => {
  switch (action.type) {
    case "CREATE_PRODUCT":
      let mainProduct = [...state.product, action.payload];
      localStorage.setItem("product", JSON.stringify(mainProduct));
      return { ...state, product: mainProduct };
    case "QUANTITY_INCREMENT":
      let change = state.product.map((el) =>
        el.id === action.payload ? { ...el, quantity: el.quantity + 1 } : el
      );
      localStorage.setItem("product", JSON.stringify(change));
      return {
        ...state,
        product: change,
      };
    case "QUANTITY_DICREMENT":
      let dicChange = state.product.map((el) =>
        el.id === action.payload
          ? { ...el, quantity: el.quantity > 1 ? el.quantity - 1 : 1 }
          : el
      );
      localStorage.setItem("product", JSON.stringify(dicChange));
      return {
        ...state,
        product: dicChange,
      };
    case "DELETE_PRODUCT":
      let delProduct = state.product.filter((el) => el.id !== action.payload);
      localStorage.setItem("product", JSON.stringify(delProduct));
      return { ...state, product: delProduct };
    // case "CATEGORY":
    //   let changeCategory = [...state.product];
    //   if (action.payload === "Завтрак") {
    //     return {
    //       ...state,
    //       product: changeCategory.filter(
    //         (el) => el.category === action.payload
    //       ),
    //     };
    //   }
    case "SEARCH_PRODUCT":
      const serachProduct = state.product.filter((el) =>
        el.title
          .toUpperCase()
          .trim()
          .includes(action.payload.toUpperCase().trim())
      );
      localStorage.setItem("search", JSON.stringify(serachProduct));
      return { ...state, search: serachProduct };
    default:
      return state;
  }
};
