var firebaseConfig = {
      apiKey: "AIzaSyDUEWbyTH69hzM1UBRpo5jeH4Ua0d83l4g",
      authDomain: "kwitter-project-88654.firebaseapp.com",
      databaseURL: "https://kwitter-project-88654-default-rtdb.firebaseio.com",
      projectId: "kwitter-project-88654",
      storageBucket: "kwitter-project-88654.appspot.com",
      messagingSenderId: "510778951895",
      appId: "1:510778951895:web:56208127bc897773774892"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    
room_name=localStorage.getItem("room_name");
user_name=localStorage.getItem("user_name");

function send(){
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name : user_name,
            message : msg,
            like : 0
      });
      document.getElementById("msg").value="";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
