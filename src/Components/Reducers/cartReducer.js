const initialState = {
  prod: [],
  qty: 0,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD":
      return Object.assign({}, state, {
        prod: [...state.prod, action.payload],
        qty: state.qty + 1,
      });

    case "REMOVE":
      return Object.assign({}, state, {
        prod: state.prod.filter((item) => item.name !== action.payload.name),
        qty: state.qty - 1,
      });

    default:
      return state;
  }
};

export default cartReducer;
