import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyAJzuGdri_OLOX7hTZAdIUTzwceDVC3XWI",
    authDomain: "bt3103-final-product.firebaseapp.com",
    databaseURL: "https://bt3103-final-product.firebaseio.com",
    projectId: "bt3103-final-product",
    storageBucket: "bt3103-final-product.appspot.com",
    messagingSenderId: "619318861214",
    appId: "1:619318861214:web:b5e764801058894b91ca8f",
    measurementId: "G-HB0D3FX5LV"
};
firebase.initializeApp(firebaseConfig);
var database = firebase.firestore();
export default database;