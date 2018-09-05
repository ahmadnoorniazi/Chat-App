import firebase from 'firebase';

var config = {
  apiKey: "AIzaSyARmDYcNy11hreeJS6mEKzPH9cNx-oY81M",
  authDomain: "hot-redux-app.firebaseapp.com",
  databaseURL: "https://hot-redux-app.firebaseio.com",
  projectId: "hot-redux-app",
  storageBucket: "hot-redux-app.appspot.com",
  messagingSenderId: "791368272733"
};
firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
