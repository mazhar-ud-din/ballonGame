const firebaseConfig = {
    apiKey: "AIzaSyBZkvb-EicmTdqVT-K0upXz6_RUWo1YqFo",
    authDomain: "game-project-13b68.firebaseapp.com",
    projectId: "game-project-13b68",
    storageBucket: "game-project-13b68.appspot.com",
    messagingSenderId: "469975967309",
    appId: "1:469975967309:web:1fbcf8437453fcc30f9e04",
    measurementId: "G-R1HKGHDHSW"
  };
  
  firebase.initializeApp(firebaseConfig);
//SignUp Page
  const SignUp =()=>{
    let userEmail = document.getElementById("uEmail").value;
    let userpassword = document.getElementById("uPassword").value;
    firebase.auth().createUserWithEmailAndPassword(userEmail, userpassword)
         .then((userCredential) => {
             // Signed in 
             var user = userCredential.user;
            console.log(user);
            // ...
        })
        .catch((error) => {
          var errorCode = error.code;
           var errorMessage = error.message;
            // ..
         });
  }
  //LogIn page2
  const login =()=>{
    
    let userEmail = document.getElementById("uEmail").value;
    let userpassword = document.getElementById("uPassword").value;
    firebase.auth().createUserWithEmailAndPassword(userEmail, userpassword)
         .then((userCredential) => {
             // Signed in 
             var user = userCredential.user;
            console.log(user);
            
            // ...
        })
        .catch((error) => {
          var errorCode = error.code;
           var errorMessage = error.message;
           console.log(errorMessage);
            // ..
         });
         window.location.assign("./ballon.html")
  }
//Firebase DataBase
  const Database =()=>{
    let userEmail = document.getElementById("uEmail").value;
    let userpassword = document.getElementById("uPassword").value;
   let Gamer={
     email:userEmail,
     password:userpassword
   }
   firebase.database().ref("Database").push(Gamer);
}
//Call function
function myFunction(){
    SignUp();
    Database();
}


  

