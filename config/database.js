const dotenv = require('dotenv');
dotenv.config();

const { DB_URL: databaseURL } = process.env;

var admin = require("firebase-admin");

var serviceAccount = require("../security/mini-netflix-1a16d-firebase-adminsdk-k1idl-2aeb5ee85b.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: databaseURL
});

const db = admin.firestore();

module.exports = db
