const mongoose = require('mongoose')

let isConected

const connectToDd = async () => {
  if(!isConected) { // Esta logica es para evitar varias conexiones simultaneas
    mongoose.set('strictQuery', true);
    await mongoose.connect('mongodb+srv://Fnco:a00032@cluster0.6x38rr0.mongodb.net/ecommerce',
    { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => {
          isConected = true
          console.log('MongoDB Connected...')})
        .catch(err => console.log(err))   
    return
  }

  console.log("Conexion existente")
  return
}

module.exports = connectToDd 

