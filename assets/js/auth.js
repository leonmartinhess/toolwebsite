// Import the functions you need from the SDKs you need
			  
  import {
	initializeApp
  } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
  
  import {
	getAnalytics
  } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-analytics.js";
  
  import { 
	getAuth,
	onAuthStateChanged, 
	signOut,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
  } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-auth.js";
  
  import {
	AuthErrorCodes
  } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-auth.js";
  
  
  /* 
  TODO: Add SDKs for Firebase products that you want to use
  https://firebase.google.com/docs/web/setup#available-libraries
  Your web app's Firebase configuration
  For Firebase JS SDK v7.20.0 and later, measurementId is optional
  */
  
  const firebaseConfig = {
	  apiKey: "AIzaSyBXuDPrHAfTIPu9CHVtrNy-yNBlXIoQCE8",
	  authDomain: "toolwebsite-ed574.firebaseapp.com",
	  projectId: "toolwebsite-ed574",
	  storageBucket: "toolwebsite-ed574.appspot.com",
	  messagingSenderId: "103988189196",
	  appId: "1:103988189196:web:5c1513ea612b78eeb8f629",
	  measurementId: "G-NHZZM9DL2T"
	};
  
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);