// Import the functions you need from the SDKs you need
			  
  import {
	initializeApp
  } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";

  import {
	initializeAppCheck,
	ReCaptchaV3Provider,
  } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app-check.js";

  import {
	getAnalytics
  } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-analytics.js";
  
  import { 
	getAuth,
	onAuthStateChanged, 
	signOut,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	AuthErrorCodes,
  } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-auth.js";
  
  /* 
  TODO: Add SDKs for Firebase products that you want to use
  https://firebase.google.com/docs/web/setup#available-libraries
  Your web app's Firebase configuration
  For Firebase JS SDK v7.20.0 and later, measurementId is optional
  */
  

  // Initialize Firebase
  const app = initializeApp({
	  apiKey: "AIzaSyBXuDPrHAfTIPu9CHVtrNy-yNBlXIoQCE8",
	  authDomain: "toolwebsite-ed574.firebaseapp.com",
	  projectId: "toolwebsite-ed574",
	  storageBucket: "toolwebsite-ed574.appspot.com",
	  messagingSenderId: "103988189196",
	  appId: "1:103988189196:web:5c1513ea612b78eeb8f629",
	  measurementId: "G-NHZZM9DL2T"
	});

  const analytics = getAnalytics(app);

  // AppCheck with reCAPTCHAV3 to protect the backend Firebase Services (Storage)
  const appCheck = initializeAppCheck(app, {
	provider: new ReCaptchaV3Provider('6LelfawlAAAAANIlsSbNvIatTSbWiQq_kDfH2Dfq'),
	// Optional argument. If true, the SDK automatically refreshes App Check
	// tokens as needed.
	isTokenAutoRefreshEnabled: true
  });

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
	else if(document.getElementById("txtEmail").value == "") {
	  document.getElementById("lblLoginErrorMessage").innerHTML = `Please enter Email and password.`      
	} 
	else if(document.getElementById("txtPassword").value == "") {
	  document.getElementById("lblLoginErrorMessage").innerHTML = `Please enter Email and password.`
	}
	else if(error.code == AuthErrorCodes.EMAIL_EXISTS) {
	  document.getElementById("lblLoginErrorMessage").innerHTML = `Email already in use. Try again or sign in.`
	}
	else if(error.code == AuthErrorCodes.NETWORK_REQUEST_FAILED) {
	  document.getElementById("lblLoginErrorMessage").innerHTML = `Network request failed. Please check your internet connection.`
	}
	else if(error.code == AuthErrorCodes.WEAK_PASSWORD) {
	  document.getElementById("lblLoginErrorMessage").innerHTML = `Your password should be at least 6 characters. Try again.`	
	}
	else if(error.code == AuthErrorCodes.INVALID_EMAIL) {
	  document.getElementById("lblLoginErrorMessage").innerHTML = 'Invalid Email. Try again.'
	}
	else if(error.code == AuthErrorCodes.USER_DELETED) {
	  document.getElementById("lblLoginErrorMessage").innerHTML = `User not found. Please create an account.`
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