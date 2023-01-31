const admin = require('firebase-admin');

const createCart = async () => {
    const db = admin.firestore();
    const query = db.collection('cart'); 

    await Promise.all([
        query.doc('cart').set({ name: "", price: "", stock: "" })
    ])
}; 

module.exports = createCart