 
  // Import all functions that are needed for storage
  import {
	  initializeApp
  } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
 
  import {
    getStorage,
    ref,
    getDownloadURL,
  } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-storage.js"
  
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

  // Initialize Storage and storageRef
  const storage = getStorage(app);
  const storageRef = ref(storage);

  /* Downloads for Graphic */

  document.getElementById("ddu").addEventListener('click', function(){
    getDownloadURL(ref(storage, 'dl/DDU.exe'))
    .then((url) => {
      //console.log(url);
      window.open(url, '_self');
    })
    .catch((error) => {
      // Handle any errors
      console.log(`There was an error: ${error}`)
    });
  })

  document.getElementById("nvcleanstall").addEventListener('click', function(){
    getDownloadURL(ref(storage, 'dl/NVCleanstall.exe'))
    .then((url) => {
      //console.log(url);
      window.open(url, '_self');
    })
    .catch((error) => {
      // Handle any errors
      console.log(`There was an error: ${error}`)
    });
  })

  document.getElementById("msi").addEventListener('click', function(){
    getDownloadURL(ref(storage, 'dl/MSI-util-V3.zip'))
    .then((url) => {
      //console.log(url);
      window.open(url, '_self');
    })
    .catch((error) => {
      // Handle any errors
      console.log(`There was an error: ${error}`)
    });
  })

  document.getElementById("msi-afterburner").addEventListener('click', function(){
    getDownloadURL(ref(storage, 'dl/MSIAfterburnerSetup.zip'))
    .then((url) => {
      //console.log(url);
      window.open(url, '_self');
    })
    .catch((error) => {
      // Handle any errors
      console.log(`There was an error: ${error}`)
    });
  })

  document.getElementById("nvidiainspector").addEventListener('click', function(){
    getDownloadURL(ref(storage, 'dl/nvidiaProfileInspector.zip'))
    .then((url) => {
      //console.log(url);
      window.open(url, '_self');
    })
    .catch((error) => {
      // Handle any errors
      console.log(`There was an error: ${error}`)
    });
  }) 

  document.getElementById("gpu-z").addEventListener('click', function(){
    getDownloadURL(ref(storage, 'dl/GPU-Z.exe'))
    .then((url) => {
      //console.log(url);
      window.open(url, '_self');
    })
    .catch((error) => {
      // Handle any errors
      console.log(`There was an error: ${error}`)
    });
  })



  /* Downloads for Optimization */

  document.getElementById("fr33thy").addEventListener('click', function(){
    getDownloadURL(ref(storage, 'dl/FR33THY Optimization Pack.zip'))
    .then((url) => {
      //console.log(url);
      window.open(url, '_self');
    })
    .catch((error) => {
      // Handle any errors
      console.log(`There was an error: ${error}`)
    });
  })

  document.getElementById("tcpoptimizer").addEventListener('click', function(){
    getDownloadURL(ref(storage, 'dl/TCPOptimizer.exe'))
    .then((url) => {
      //console.log(url);
      window.open(url, '_self');
    })
    .catch((error) => {
      // Handle any errors
      console.log(`There was an error: ${error}`)
    });
  })

  document.getElementById("wpd").addEventListener('click', function(){
    getDownloadURL(ref(storage, 'dl/wpd.zip'))
    .then((url) => {
      //console.log(url);
      window.open(url, '_self');
    })
    .catch((error) => {
      // Handle any errors
      console.log(`There was an error: ${error}`)
    });
  })

  document.getElementById("adwcleaner").addEventListener('click', function(){
    getDownloadURL(ref(storage, 'dl/adwcleaner.exe'))
    .then((url) => {
      //console.log(url);
      window.open(url, '_self');
    })
    .catch((error) => {
      // Handle any errors
      console.log(`There was an error: ${error}`)
    });
  })

  document.getElementById("honectrl").addEventListener('click', function(){
    getDownloadURL(ref(storage, 'dl/HoneCtrl.bat'))
    .then((url) => {
      //console.log(url);
      window.open(url, '_self');
    })
    .catch((error) => {
      // Handle any errors
      console.log(`There was an error: ${error}`)
    });
  })

  document.getElementById("autoruns").addEventListener('click', function(){
    getDownloadURL(ref(storage, 'dl/Autoruns.zip'))
    .then((url) => {
      //console.log(url);
      window.open(url, '_self');
    })
    .catch((error) => {
      // Handle any errors
      console.log(`There was an error: ${error}`)
    });
  })

  document.getElementById("optimizer").addEventListener('click', function(){
    getDownloadURL(ref(storage, 'dl/Optimizer.exe'))
    .then((url) => {
      //console.log(url);
      window.open(url, '_self');
    })
    .catch((error) => {
      // Handle any errors
      console.log(`There was an error: ${error}`)
    });
  })

  document.getElementById("uad").addEventListener('click', function(){
    getDownloadURL(ref(storage, 'dl/uad_gui-windows.exe'))
    .then((url) => {
      //console.log(url);
      window.open(url, '_self');
    })
    .catch((error) => {
      // Handle any errors
      console.log(`There was an error: ${error}`)
    });
  })

  document.getElementById("atlas").addEventListener('click', function(){
    getDownloadURL(ref(storage, 'dl/Atlas-Playbook.zip'))
    .then((url) => {
      //console.log(url);
      window.open(url, '_self');
    })
    .catch((error) => {
      // Handle any errors
      console.log(`There was an error: ${error}`)
    });
  })

  document.getElementById("revi").addEventListener('click', function(){
    getDownloadURL(ref(storage, 'dl/Revi-Playbook.zip'))
    .then((url) => {
      //console.log(url);
      window.open(url, '_self');
    })
    .catch((error) => {
      // Handle any errors
      console.log(`There was an error: ${error}`)
    });
  })



  /* Downloads for Drivers */

  document.getElementById("visualc").addEventListener('click', function(){
    getDownloadURL(ref(storage, 'dl/VisualCppRedist_AIO.zip'))
    .then((url) => {
      //console.log(url);
      window.open(url, '_self');
    })
    .catch((error) => {
      // Handle any errors
      console.log(`There was an error: ${error}`)
    });
  })

  document.getElementById("driverstore").addEventListener('click', function(){
    getDownloadURL(ref(storage, 'dl/DriverStoreExplorer.zip'))
    .then((url) => {
      //console.log(url);
      window.open(url, '_self');
    })
    .catch((error) => {
      // Handle any errors
      console.log(`There was an error: ${error}`)
    });
  })

  document.getElementById("sdio").addEventListener('click', function(){
    getDownloadURL(ref(storage, 'dl/SDIO.zip'))
    .then((url) => {
      //console.log(url);
      window.open(url, '_self');
    })
    .catch((error) => {
      // Handle any errors
      console.log(`There was an error: ${error}`)
    });
  })

  document.getElementById("samsung-usb-driver").addEventListener('click', function(){
    getDownloadURL(ref(storage, 'dl/SAMSUNG-USB-Driver.exe'))
    .then((url) => {
      //console.log(url);
      window.open(url, '_self');
    })
    .catch((error) => {
      // Handle any errors
      console.log(`There was an error: ${error}`)
    });
  })
  
  
  
  /* Downloads for USB-Tools */

  document.getElementById("mediacreationtoolwin10").addEventListener('click', function(){
    getDownloadURL(ref(storage, 'dl/MediaCreationToolWin10.exe'))
    .then((url) => {
      //console.log(url);
      window.open(url, '_self');
    })
    .catch((error) => {
      // Handle any errors
      console.log(`There was an error: ${error}`)
    });
  })

  document.getElementById("mediacreationtoolwin11").addEventListener('click', function(){
    getDownloadURL(ref(storage, 'dl/MediaCreationToolWin11.exe'))
    .then((url) => {
      //console.log(url);
      window.open(url, '_self');
    })
    .catch((error) => {
      // Handle any errors
      console.log(`There was an error: ${error}`)
    });
  })

  document.getElementById("rufus").addEventListener('click', function(){
    getDownloadURL(ref(storage, 'dl/rufus.exe'))
    .then((url) => {
      //console.log(url);
      window.open(url, '_self');
    })
    .catch((error) => {
      // Handle any errors
      console.log(`There was an error: ${error}`)
    });
  })

  document.getElementById("ventoy").addEventListener('click', function(){
    getDownloadURL(ref(storage, 'dl/ventoy.zip'))
    .then((url) => {
      //console.log(url);
      window.open(url, '_self');
    })
    .catch((error) => {
      // Handle any errors
      console.log(`There was an error: ${error}`)
    });
  })

  document.getElementById("balenaEtcher").addEventListener('click', function(){
    getDownloadURL(ref(storage, 'dl/balenaEtcher-Portable.exe'))
    .then((url) => {
      //console.log(url);
      window.open(url, '_self');
    })
    .catch((error) => {
      // Handle any errors
      console.log(`There was an error: ${error}`)
    });
  })

  document.getElementById("raspberry").addEventListener('click', function(){
    getDownloadURL(ref(storage, 'dl/raspberry.exe'))
    .then((url) => {
      //console.log(url);
      window.open(url, '_self');
    })
    .catch((error) => {
      // Handle any errors
      console.log(`There was an error: ${error}`)
    });
  })

  document.getElementById("odin").addEventListener('click', function(){
    getDownloadURL(ref(storage, 'dl/Odin3.zip'))
    .then((url) => {
      //console.log(url);
      window.open(url, '_self');
    })
    .catch((error) => {
      // Handle any errors
      console.log(`There was an error: ${error}`)
    });
  })

  document.getElementById("heimdall").addEventListener('click', function(){
    getDownloadURL(ref(storage, 'dl/heimdall-suite.zip'))
    .then((url) => {
      //console.log(url);
      window.open(url, '_self');
    })
    .catch((error) => {
      // Handle any errors
      console.log(`There was an error: ${error}`)
    });
  })
  