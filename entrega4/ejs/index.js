const express = require('express');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('views', './views');
app.set('view engine', 'ejs');

const productos = [];

app.get('/', (req, res) => {
  res.render('form.ejs', {productos});
});

app.post('/products', async (req, res) => {
  const { producto, precio, url } = req.body;
  productos.push({ producto, precio, url });

  console.log(productos)
  res.redirect('/');
});

app.listen(8082, (req, res) => console.log('Listening'));