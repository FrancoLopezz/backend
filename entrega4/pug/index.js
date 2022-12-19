const express = require('express');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('views', './views');
app.set('view engine', 'pug');

const productos = [];

app.get('/', (req, res) => {
  res.render('form.pug', {productos});
});

app.post('/products', async (req, res) => {
  const { producto, precio, url} = req.body;

  productos.push({producto, precio, url});
  
  console.log(req.body);
  res.redirect('/');
})

app.listen(8081, (req, res) => console.log('Listening'));