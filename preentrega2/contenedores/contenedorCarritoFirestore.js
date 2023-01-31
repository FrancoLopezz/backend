const admin = require('firebase-admin');

const readCart = async () => {
    const db = admin.firestore();
    const query = db.collection('cart'); 

    const querySnapshot = await query.get();

    if(querySnapshot.empty) {
        console.log('coleccion vacia')
    } else {
        querySnapshot.forEach(doc => {
            console.log(JSON.stringify(doc.data(), null, 2))
        })
    }
}

module.exports = readCart; 