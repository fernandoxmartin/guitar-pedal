export const addToCart = (item) => {
  let products = localStorage.getItem("products");
  const product = {
    id: item.id,
    img: item.img,
    name: item.name,
    price: item.price,
  };

  products = products ? JSON.parse(products) : [];
  products.push(product);
  localStorage.setItem("products", JSON.stringify(products));
};
