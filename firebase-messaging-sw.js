importScripts('https://www.gstatic.com/firebasejs/12.14.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/12.14.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyDhtpnaLYjpAwS_Q3JqDQcU8IeDjHN8mOw",
  authDomain: "fixturemundial2026-ab189.firebaseapp.com",
  projectId: "fixturemundial2026-ab189",
  storageBucket: "fixturemundial2026-ab189.firebasestorage.app",
  messagingSenderId: "926358579370",
  appId: "1:926358579370:web:fe74f9c5381ca7a5a888d3"
});

const messaging = firebase.messaging();