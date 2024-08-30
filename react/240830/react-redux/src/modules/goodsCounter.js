export const addNumber = () => {
  return { type: "ADD" };
};

export const minusNumber = () => {
  return { type: "MINUS" };
};

const initialState = {
  stock: 10,
  goods: 1,
};

const goodReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        stock: state.stock - 1,
        goods: state.goods + 1,
      };

    case "MINUS":
      return {
        ...state,
        stock: state.stock + 1,
        goods: state.goods - 1,
      };
    default:
      return state;
  }
};

export default goodReducer;
