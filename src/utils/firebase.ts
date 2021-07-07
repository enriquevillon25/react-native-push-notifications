import firebase from "firebase/app"
 
const firebaseConfig = {
    apiKey: "AIzaSyCP1ClscGciEpufhu9-2iFMoB_v9Meaihc",
    authDomain: "restaurant-menu-app-6dd99.firebaseapp.com",
    projectId: "restaurant-menu-app-6dd99",
    storageBucket: "restaurant-menu-app-6dd99.appspot.com",
    messagingSenderId: "978827497082",
    appId: "1:978827497082:web:50eb35e5b386bcce2335c3"
};
  
export default firebase.initializeApp(firebaseConfig);