//LINKS FIREBASE
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
    const app = initializeApp(firebaseConfig);
    user_name = localStorage.getItem("user_name");
	room_name = localStorage.getItem("room_name");

      function send (){
            msg = document.getElementById("msg").value;
            firebase.database().ref(roomName).push({
                  name:userName,
                  message:msg,
                  like:0
            })
            document.getElementById("msg").value="";
            }

   
function getData() { firebase.database().ref("/"+roomName).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebaseMessageId = childKey;
         messageData = childData;
//Início do código
console.log(firebaseMessageId);
console.log(messageData);
name = messageData['name'];
message = messageData['message'];
like = messageData['like'];
messageWithTag = "<h4 class = 'message_h4' >" + message + "</h4>";
nameWidthTag = "<h4>" + name + "<img class = 'user_tick' src = 'tick.png'><h4> ";
likeButton = "<button class = 'btn btn-warning' id ="+firebaseMessageId+" value ="+like+" onclick = 'updateLike(this.id)'>  ";
spanWithTag = "<span class = 'glyphicon glyphicon-thumbs-up'>Like: "+like+"</span><button><hr>";

row = nameWidthTag + messageWithTag + likeButton + spanWithTag;
document.getElementById("output").innerHTML += row;

//Fim do códi.go
      } });  }); }
getData();

function updateLike(messageId) 
{
console.log("botão Like pressionado - " + messageId );
button_id = messageId;
likes = document.getElementById(button_id).value;
updatedLikes = Number(likes) + 1;
console.log(updatedLikes);

firebase.database().ref(roomName).child(messageId).update({
likes : updatedLikes
});

}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
          window.location = "index.html";
      }





