import app from 'firebase/app';

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
  }
}

export default Firebase;
