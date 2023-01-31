import mongoose from "mongoose";
import connectToDb from "./config/connectToMongo.js";
import create from "./daos/productos/productosDaoMongo.js";
import createCart from "./daos/carrito/carritoDaoMongo.js";

connectToDb()
  .then(async () => await create())
  .then(async () => await createCart())

  .finally(() => mongoose.disconnect());
