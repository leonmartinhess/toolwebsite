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

  const loginEmailPassword = async () => {
	const loginEmail = document.getElementById("txtEmail").value
	const loginPassword = document.getElementById("txtPassword").value

	try {
	   await signInWithEmailAndPassword(auth, loginEmail, loginPassword)
	}
	catch(error) {
	   console.log(`There was an error: ${error}`)
	   showLoginError(error)
	}
	}

  // Create new account using email/password
  const createAccount = async () => {
	const email = document.getElementById("txtEmail").value
	const password = document.getElementById("txtPassword").value
  
	try {
	  await createUserWithEmailAndPassword(auth, email, password)
	}
	catch(error) {
	  console.log(`There was an error: ${error}`)
	  showLoginError(error)
	} 
	}

  export const hideLoginError = () => {
	document.getElementById("divLoginError").style.display = 'none'
	document.getElementById("lblLoginErrorMessage").innerHTML = ''
  }
  hideLoginError();

  export const showLoginError = (error) => {
	document.getElementById("divLoginError").style.display = 'block'    
	if (error.code == AuthErrorCodes.INVALID_PASSWORD) {
	  document.getElementById("lblLoginErrorMessage").innerHTML = `Wrong password. Try again.`
	}
	else {
	  document.getElementById("lblLoginErrorMessage").innerHTML = `Error: ${error.message}`      
	}
	}

 export const showLoginForm = () => {
	document.getElementById("login").style.display = 'block'
	document.getElementById("app").style.display = 'none'
  }
  
 export const showApp = () => {
	document.getElementById("login").style.display = 'none'
	document.getElementById("app").style.display = 'block'
  }

  // Log out
 const logout = async () => {
	await signOut(auth);
  }

  // Monitor auth state
 const monitorAuthState = async () => {
	onAuthStateChanged(auth, user => {
	  if (user) {
		console.log(user)
		showApp()
		showLoginState(user)
		hideLoginError()
	  }
	  else {
		showLoginForm()
		document.getElementById("lblAuthState").innerHTML = `You're not logged in.`
	  }
	})
  }


 export const showLoginState = (user) => {
	//document.getElementById("lblAuthState").innerHTML = `You're logged in as ${user.displayName} (uid: ${user.uid}, email: ${user.email}) `
	document.getElementById("lblAuthState").innerHTML = `You're logged in with the Email: ${user.email} `
  }

  document.getElementById("btnLogin").addEventListener("click", loginEmailPassword) 
  document.getElementById("btnSignup").addEventListener("click", createAccount)
  document.getElementById("btnLogout").addEventListener("click", logout)
  const auth = getAuth(app);
  monitorAuthState();