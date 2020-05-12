const totalReducer = (state = 0, action) => {
  switch (action.type) {
    case "SUB_TOTAL":
      return action.payload.reduce((acc, val) => acc + val);

    default:
      return state;
  }
};

export default totalReducer;
