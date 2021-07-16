var firebaseConfig = {
    apiKey: "AIzaSyB60E3Y-sI2a-Z59UnOMBcYc3zvtKXPcHI",
    authDomain: "kwitter-4dfd2.firebaseapp.com",
    databaseURL: "https://kwitter-4dfd2-default-rtdb.firebaseio.com",
    projectId: "kwitter-4dfd2",
    storageBucket: "kwitter-4dfd2.appspot.com",
    messagingSenderId: "845707074213",
    appId: "1:845707074213:web:e82382d97a64d68b730b4c"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  function Adduser(){
      user_name=document.getElementById("Username").value;
      firebase.database().ref("/").child(user_name).update({
          purpose:"adding user"
      });
  }