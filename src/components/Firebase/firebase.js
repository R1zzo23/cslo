import app from 'firebase/app';
import 'firebase/auth';
import '@firebase/firestore'

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

  }
}

export default Firebase;
