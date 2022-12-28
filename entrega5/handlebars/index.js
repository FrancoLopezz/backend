const express = require('express');
const { engine } = require('express-handlebars');
const { createServer } = require('http');
const socketIo = require('socket.io');

const app = express();
const server = createServer(app);
const io = socketIo(server, {cors:{origin:"*"}});

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/public', express.static(__dirname + '/public'));

app.set('view engine', 'handlebars'); 
app.set('views', './views');

app.engine('handlebars', engine());

const productos = [];
const messages = [];

app.get('/', (req, res) => {
    res.render('form.handlebars', {root: __dirname+"public"});
});

io.on('connection', client => {
    console.log(`Client ${client.id} connected`);
    client.emit('products', productos);
    client.emit('messages', messages); 

    client.on('new-message', message => {
        messages.push(message); 
        io.sockets.emit('message-added', message); 
    })

    client.on('addProduct', (product) => {
        productos.push(product) 
        io.sockets.emit('product-added', productos)
    })
})

server.listen(3030, () => console.log('Listening on port 3030'))