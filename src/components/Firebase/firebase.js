import app from 'firebase/app';
import 'firebase/auth';

// Initialize Firebase
const config = {
  apiKey: "AIzaSyAv4HeK9IwiAQsQz3NeFel71fHvCVuTPRU",
  authDomain: "csl-online.firebaseapp.com",
  databaseURL: "https://csl-online.firebaseio.com",
  projectId: "csl-online",
  storageBucket: "csl-online.appspot.com",
  messagingSenderId: "418530441671"
};

class Firebase {
  constructor() {
    app.initializeApp(config);

    this.auth = app.auth();

    // *** Auth API ***

    const doCreateUserWithEmailAndPassword = (email, password) =>
      this.auth.createUserWithEmailAndPassword(email, password);

    const doSignInWithEmailAndPassword = (email, password) =>
      this.auth.signInWithEmailAndPassword(email, password);

    const doSignOut = () => this.auth.signOut();

    const doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

    const doPasswordUpdate = password =>
      this.auth.currentUser.updatePassword(password);
  }
}

export default Firebase;
