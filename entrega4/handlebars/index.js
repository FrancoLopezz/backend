const express = require('express');
const { engine } = require('express-handlebars');

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.set('view engine', 'handlebars'); 
app.set('views', './productos');

app.engine('handlebars', engine());

const productos = [];

app.get('/', (req, res) => {
    res.render('form.handlebars', {productos});
});

app.post('/products', async (req, res) => {
    const { producto, precio, url} = req.body;

    productos.push({producto, precio, url});
    
    console.log(productos);
    res.redirect('/');
})

app.listen(3030, () => console.log('Listening on port 3000'))