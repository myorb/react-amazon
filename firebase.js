import firebase from "firebase";

const app = firebase.initializeApp(process.env.FIREBASE_CONFIG);

const auth = app.auth();

export default { auth };
