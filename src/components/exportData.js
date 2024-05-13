import React from 'react'
import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import class24 from './DraftClass/2024class.json';

// Initialize Firebase
const config = {
  apiKey: "AIzaSyAv4HeK9IwiAQsQz3NeFel71fHvCVuTPRU",
  authDomain: "csl-online.firebaseapp.com",
  databaseURL: "https://csl-online.firebaseio.com",
  projectId: "csl-online",
  storageBucket: "csl-online.appspot.com",
  messagingSenderId: "418530441671"
};

export class exportData extends React.Component {
  constructor() {
    app.initializeApp(config);

    this.auth = app.auth();

    const db = app.firestore();
    db.settings({ timestampsInSnapshots: true});
  }
  exportData() {
    console.log(class24);
  }
  render() {
    return (
      <div>
        <button onClick={exportData}>Export Class to Firestore</button>
      </div>
    );
  }
}
