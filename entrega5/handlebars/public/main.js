const client = io()

client.on('connection', () => {
   console.log('You are connected') 
})

let prod = []

client.on('products', (data) => {
  console.log(data)
  htmlToRender = ""

  data.forEach(prod => {
     htmlToRender = htmlToRender + `
          <thead>
              <tr>
              <th scope="col">#</th>
              <th scope="col">Producto</th>
              <th scope="col">Precio</th>
              <th scope="col">Foto del producto</th>
              </tr>
          </thead>
          <tbody>
              <tr>
              <td scope="row"> ● </td>
              <td>${prod.producto}</td>
              <td>${prod.precio}</td>
              <td> <img src="${prod.url}"> </td>
              </tr>
          </tbody>
      `
      console.log(prod)
  });

    document.getElementById('table').innerHTML = htmlToRender

})

client.on('product-added', prod => {
  let html = document.getElementById('#table').innerHTML;
  console.log({html})
  html = `${html}
          <thead>
              <tr>
              <th scope="col">#</th>
              <th scope="col">Producto</th>
              <th scope="col">Precio</th>
              <th scope="col">Foto del producto</th>
              </tr>
          </thead>
          <tbody>
              <tr>
              <td scope="row"> ● </td>
              <td>${prod.producto}</td>
              <td>${prod.precio}</td>
              <td> <img src="${prod.url}"> </td>
              </tr>
          </tbody>
  `

  console.log(prod) 

  document.getElementById('table').innerHTML = `${html}`;
});

const sendProducts = (that) => {
  const product = {
    producto: that.producto.value,
    pecio: that.precio.value,
    url: that.url.value
  }; 

  client.emit('addProduct', product);
};

/* CHAT */

client.on('messages', data => {
   let html = '';
 
   data.forEach(message => {
     html = `${html}
     <li><em>${message.author}</em> says: ${message.text}</li>`
   });
 
   document.getElementById('chatContent').innerHTML = `${html}`;
});
 
client.on('message-added', message => {
  let html = document.getElementById('chatContent').innerHTML;
console.log({html})
  html = `${html}
  <li><em>${message.author}</em> says: ${message.text}</li>`;

  document.getElementById('chatContent').innerHTML = `${html}`;
});
 
const sendMessage = (that) => {
  const message = {
    author: that.author.value,
    text: that.text.value
  };
  client.emit('new-message', message);
};