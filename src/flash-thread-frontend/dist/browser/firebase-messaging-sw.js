importScripts('https://www.gstatic.com/firebasejs/7.6.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.6.0/firebase-messaging.js');

firebase.initializeApp({
  apiKey: "AIzaSyBz0EakdSKMLL49mEpz6AmPpmT2pZt4JDA",
  authDomain: "flash-thread.firebaseapp.com",
  projectId: "flash-thread",
  storageBucket: "flash-thread.appspot.com",
  messagingSenderId: "889572240321",
  appId: "1:889572240321:web:ed23f59d691d51423fdd40",
  measurementId: "G-ZRLRP66075",
});

const messaging = firebase.messaging();
