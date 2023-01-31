import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const cartSchema = new Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  stock: { type: Number, required: true }
});

const Cart = model('cart', cartSchema);

export default Cart; 