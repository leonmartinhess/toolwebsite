  import {
	initializeApp
  } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
 
  import {
    getStorage,
    ref,
    getDownloadURL,
  } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-storage.js"
  
  const firebaseConfig = {
    apiKey: "AIzaSyBXuDPrHAfTIPu9CHVtrNy-yNBlXIoQCE8",
    authDomain: "toolwebsite-ed574.firebaseapp.com",
    projectId: "toolwebsite-ed574",
    storageBucket: "toolwebsite-ed574.appspot.com",
    messagingSenderId: "103988189196",
    appId: "1:103988189196:web:5c1513ea612b78eeb8f629",
    measurementId: "G-NHZZM9DL2T"
  }; 
  const app = initializeApp(firebaseConfig); 
  const storage = getStorage(app);
  const storageRef = ref(storage);

  document.getElementById("ddu").addEventListener('click', function(){
    getDownloadURL(ref(storage, 'dl/DDU.exe'))
    .then((url) => {
      console.log(url);
      window.open(url, '_self');
    })
    .catch((error) => {
      // Handle any errors
    });
  })

  document.getElementById("nvcleanstall").addEventListener('click', function(){
    getDownloadURL(ref(storage, 'dl/NVCleanstall.exe'))
    .then((url) => {
      console.log(url);
      window.open(url, '_self');
    })
    .catch((error) => {
      // Handle any errors
    });
  })

  document.getElementById("msi").addEventListener('click', function(){
    getDownloadURL(ref(storage, 'dl/MSI_util_V3.zip'))
    .then((url) => {
      console.log(url);
      window.open(url, '_self');
    })
    .catch((error) => {
      // Handle any errors
    });
  })

  document.getElementById("msi-afterburner").addEventListener('click', function(){
    getDownloadURL(ref(storage, 'dl/MSIAfterburnerSetup.zip'))
    .then((url) => {
      console.log(url);
      window.open(url, '_self');
    })
    .catch((error) => {
      // Handle any errors
    });
  })

  document.getElementById("nvidiainspector").addEventListener('click', function(){
    getDownloadURL(ref(storage, 'dl/nvidiaProfileInspector.zip'))
    .then((url) => {
      console.log(url);
      window.open(url, '_self');
    })
    .catch((error) => {
      // Handle any errors
    });
  }) 

  document.getElementById("gpu-z").addEventListener('click', function(){
    getDownloadURL(ref(storage, 'dl/GPU-Z.exe'))
    .then((url) => {
      console.log(url);
      window.open(url, '_self');
    })
    .catch((error) => {
      // Handle any errors
    });
  })
