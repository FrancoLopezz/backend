const express = require('express');
const {Router} = express;

const app = express();
const appRouter = Router();
const appCarrito = Router();
app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.use('/api/productos',appRouter);
app.use('/api/carrito',appCarrito);

const PORT = 8080

const productos = [
    { id:1, nombre: 'Dunk', precio:200, descripcion: '', stock: '', image: '', timestamp: Date.now() },
    { id:2, nombre: 'Air Force', precio:230, descripcion: '', stock: '', image: '', timestamp: Date.now() },
    { id:3, nombre: 'Jordan', precio:250, descripcion: '', stock: '', image: '', timestamp: Date.now() },
    { id:4, nombre: 'Uptempo', precio:250, descripcion: '', stock: '', image: '', timestamp: Date.now() },
    { id:5, nombre: 'Guarache', precio:150, descripcion: '', stock: '', image: '', timestamp: Date.now() }
];

const carrito = [

    {id: 1, timestamp: Date.now(), productos: `${productos.id}`} 

];


appRouter.get('/', (req,res) => {

  res.json(productos)

});

appRouter.get('/:id',(req,res) => {

    const id = req.params.id;
    const productosid = productos.find(item => item.id == id);
    res.json(productosid);

});

appRouter.post('/', (req, res) => {
  const productToAdd = req.body; 
  productos.push(productToAdd);

  res.json({productos})

});

appRouter.put('/:id', (req, res) => {
  const id = req.params.id;
  const productToModify = req.body;
  const productosid = productos.find(item => item.id == id);
  
  productos[productosid] = productos.push(productToModify)

  res.json(productToModify)

});

appRouter.delete('/:id', (req, res) => {
  const id = req.params.id;
  const productosid = productos.find(item => item.id == id - 1);
  const deleteById = productos.splice(productosid, 1) [0];

  res.json(deleteById);

});

appCarrito.post('/', (req, res) => {

    res.json([carrito])

});

appCarrito.delete('/:id', (req, res) => {
    const id = req.params.id;
    const carritoid = carrito.find(item => item.id == id - 1);

    carrito.splice(carritoid, 1) [0]; 

});

appCarrito.get('/:id/productos', (req, res) => {
    
    res.json(carrito.productos)

});

appCarrito.post('/:id/productos/:id_prod', (req, res) => {
  const prodToAdd = req.body 
  const id = req.params.id;
  const carritoid = carrito.find(item => item.id == id - 1);
  
  const addCart = carrito[carritoid].push(prodToAdd)

  res.json(addCart)

});

appCarrito.delete('/:id/productos/:id_prod', (req, res) => {
    
    const id = req.params.id;
    const carritoid = carrito.find(item => item.id == id - 1);
    const deleteCartById = carrito.splice(carritoid, 1) [0];

    res.json(deleteCartById);
});

let login = false;
let user = '';

if (!user) {
  login = true; 
} else {
  login = false 
  console.log(`error : -1, descripcion: ruta 'x' método 'y' no autorizada`)
};

app.listen(PORT, () => console.log(`Listening in port 8080`));