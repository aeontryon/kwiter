
//ADD YOUR FIREBASE LINKS HERE!
const firebaseConfig = {
      apiKey: "AIzaSyBANtFRNK-ld1U08cFFkrao1Bvwji6Ejow",
      authDomain: "kwitter-7ace8.firebaseapp.com",
      databaseURL: "https://kwitter-7ace8-default-rtdb.firebaseio.com",
      projectId: "kwitter-7ace8",
      storageBucket: "kwitter-7ace8.appspot.com",
      messagingSenderId: "559242655348",
      appId: "1:559242655348:web:0d6c8b59110451dec34321"
    };

    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome" + user_name + "!";
    
    function addRoom()
    {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose : "adding rom name"
      });
      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room Name - " + Room_names);
row = "<div class='room id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names+"</div><hr>";
document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

      function logout() {
            localStorage.removeItem("user_name");
            localStorage.removeItem("room_name");
            window.location = "kwitter.html";
      }