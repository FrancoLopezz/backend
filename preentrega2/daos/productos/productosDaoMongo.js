import connectToDb from "../../config/connectToMongo.js";
import Product from "../../contenedores/contenedorMongo.js";

const create = async () => {
  const productsToAdd = [
    { name: "Jordan Travis Scott Reverse Mocha", price: 1200, stock: 100 },
    { name: "Jordan Travis Scott x Fragment", price: 1800, stock: 100 },
    { name: "Jordan Travis Scott x PlayStation", price: 3000, stock: 100 },
    { name: "Jordan Retro High Off-White Chicago", price: 4300, stock: 0 },
    { name: "Jordan Retro High OG Legends Of Summer", price: 4999, stock: 0 }
  ];

  const promises = productsToAdd.map(product => {
    const newProduct = new Product(product)

    return newProduct.save();
  });

  await Promise.all(promises);
};

export default create;