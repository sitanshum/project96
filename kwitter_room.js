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

    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome " + user_name + "!!";
    
    function addRoom(){
          room_name=document.getElementById("room_name").value;
          firebase.database().ref("/").child(room_name).update({
           roomName: room_name
          });
          localStorage.setItem("room_name",room_name);
          window.location="kwitter_page.html";
    }
    
    function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
           Room_names = childKey;
          //Start code
     row="<div class='room_name' id='"+Room_names+"' onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
     document.getElementById("output").innerHTML+=row;
          //End code
          });});}
    getData();
    
    function redirectToRoomName(name){
          localStorage.setItem("room_name",name);
          window.location="kwitter_page.html";
    }
    
    function logout(){
          localStorage.removeItem("user_name");
          localStorage.removeItem("room_name");
          window.location="index.html";
    }
    
    