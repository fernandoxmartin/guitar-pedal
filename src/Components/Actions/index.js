export const add = (item) => {
  return {
    type: "ADD",
    payload: item,
  };
};

export const subTotal = (items) => {
  return {
    type: "SUB_TOTAL",
    payload: items,
  };
};

export const removeItem = (item) => {
  return {
    type: "REMOVE",
    payload: item,
  };
};

export const removeAll = () => {
  return {
    type: "REMOVE_ALL",
  };
};
