import connectToDb from "../../config/connectToMongo.js";
import Cart from "../../contenedores/contenedorCarritoMongo.js";

const createCart = async () => {
  const cartToAdd = [
    { name: "Jordan Travis Scott Reverse Mocha", price: 1200, stock: 100 }
  ];

  const promises = cartToAdd.map(carrito => {
    const newProduct = new Cart(carrito)

    return newProduct.save();
  });

  await Promise.all(promises);
};

export default createCart;