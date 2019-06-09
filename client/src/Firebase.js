import firebase from "firebase";
import React, { Component } from "react";
const config = {
  apiKey: "AIzaSyAZ1XB1wOKxFjUOwVMzsotBQyQJQXpoiS4",
  authDomain: "pvp-application.firebaseapp.com",
  databaseURL: "https://pvp-application.firebaseio.com",
  projectId: "pvp-application",
  storageBucket: "pvp-application.appspot.com",
  messagingSenderId: "213303980815",
  appId: "1:213303980815:web:3aac863d6659bb9e"
};
// const storage = firebase.storage().ref();

firebase.initializeApp(config);

export default firebase;
