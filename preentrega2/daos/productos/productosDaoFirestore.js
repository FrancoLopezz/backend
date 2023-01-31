const admin = require('firebase-admin');

const createProduct = async () => {
    const db = admin.firestore();
    const query = db.collection('products'); 

    await Promise.all([
        query.doc('Jordan Travis Scott Reverse Mocha').set({ name: "Jordan Travis Scott Reverse Mocha", price: 1200, stock: 100 }),
        query.doc('Jordan Travis Scott x Fragment').set({ name: "Jordan Travis Scott x Fragment", price: 1800, stock: 100 }),
        query.doc('Jordan Travis Scott x PlayStation').set({ name: "Jordan Travis Scott x PlayStation", price: 3000, stock: 100 }),
        query.doc('Jordan Retro High Off-White Chicago').set({ name: "Jordan Retro High Off-White Chicago", price: 4300, stock: 0 }),
        query.doc('Jordan Retro High OG Legends Of Summer').set({ name: "Jordan Retro High OG Legends Of Summer", price: 4999, stock: 0 })
    ])
}; 

module.exports = createProduct