import firebase from 'firebase/app';
import 'firebase/storage';

// Initialize Firebase
var  firebaseConfig = {
    apiKey: "AIzaSyAuznwbO449e_xOVWQt2bj8AsW31T8SkX0",
    authDomain: "se-ecommerce-project.firebaseapp.com",
    projectId: "se-ecommerce-project",
    storageBucket: "se-ecommerce-project.appspot.com",
    messagingSenderId: "208784109332",
    appId: "1:208784109332:web:442e09565ac2a4591bdc01",
    measurementId: "G-4F4BL18LDZ"
  };

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export {
    storage, firebase as default
}