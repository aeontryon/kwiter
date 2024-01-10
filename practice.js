
//ADD YOUR FIREBASE LINKS
const firebaseConfig = {
    apiKey: "AIzaSyBANtFRNK-ld1U08cFFkrao1Bvwji6Ejow",
    authDomain: "kwitter-7ace8.firebaseapp.com",
    databaseURL: "https://kwitter-7ace8-default-rtdb.firebaseio.com",
    projectId: "kwitter-7ace8",
    storageBucket: "kwitter-7ace8.appspot.com",
    messagingSenderId: "559242655348",
    appId: "1:559242655348:web:0d6c8b59110451dec34321"
  };

  function addUser()
  {
    user_name = document.getElementById("user_name").value;
    firebaseConfig.database().ref("/").child(user_name).update({
  purpose : "adding user"
    });
}
