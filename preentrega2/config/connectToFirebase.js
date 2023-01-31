const admin = require('firebase-admin');

const serviceAccount = require('./credentialFs.json')

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://backend-coder-3f219.firebaseio.com',
}); 