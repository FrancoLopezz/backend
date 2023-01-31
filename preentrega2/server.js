const createProduct = require("./daos/productos/productosDaoFirestore");
const readProduct = require('./contenedores/contenedorFirestore');

const createCart = require('./daos/carrito/carritoDaoFirestore');
const readCart = require('./contenedores/contenedorCarritoFirestore')

require('./config/connectToFirebase');

const server = async () => {
  await readProduct();
  await createProduct();

  await readCart()
  await createCart()
}; 

server().finally(() => console.log('READY'));