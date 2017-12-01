import firebase from 'firebase';
let config = {
    apiKey: "AIzaSyB-a0ezYXLtrv1gFKB3C9hosBse3WS-JoI",
    authDomain: "awesome-quotation.firebaseapp.com",
    databaseURL: "https://awesome-quotation.firebaseio.com",
    projectId: "awesome-quotation",
    storageBucket: "awesome-quotation.appspot.com",
    messagingSenderId: "802761613458"
};

firebase.initializeApp(config);
export default firebase;