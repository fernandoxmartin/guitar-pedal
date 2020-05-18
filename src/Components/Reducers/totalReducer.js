const totalReducer = (state = 0, action) => {
  switch (action.type) {
    case "SUB_TOTAL":
      if (!action.payload || !action.payload.length) {
        return 0;
      } else {
        return action.payload.reduce((acc, val) => acc + val, 0).toFixed(2);
      }

    default:
      return state;
  }
};

export default totalReducer;
