
//ADD YOUR FIREBASE LINKS
const firebaseConfig = {
  apiKey: "AIzaSyCcXchQ6mPeTQjiBIx20H-RBUV03Tlcrrc",
  authDomain: "kwitter-fcc7e.firebaseapp.com",
  databaseURL: "https://aula92-55bc0-default-rtdb.firebaseio.com/",
  projectId: "kwitter-fcc7e",
  storageBucket: "kwitter-fcc7e.appspot.com",
  messagingSenderId: "739895264248",
  appId: "1:739895264248:web:623b869b22b0ff95d9cc0d",
  measurementId: "G-WTMCB8NK7T"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Bem-vindo(a) " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;
  localStorage.setItem("room_name", room_name); 
    
  window.location = "kwitter_page.html";
  firebase.database().ref("/").child(room_name).update({
    purpose : "adicionar sala"
  });
  
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

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
    window.location = "index.html";
}