var admin = require("firebase-admin");

var serviceAccount = require("../security/mini-netflix-1a16d-firebase-adminsdk-k1idl-2aeb5ee85b.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://mini-netflix-1a16d.firebaseio.com"
});

const db = admin.firestore();

module.exports = db
