var config = {
   apiKey: "AIzaSyDECGQaeFzCMgcAZ2cqttbI_Ui6AXyiRoU",
   authDomain: "lyricist-cf7c8.firebaseapp.com",
   databaseURL: "https://lyricist-cf7c8.firebaseio.com",
   projectId: "lyricist-cf7c8",
   storageBucket: "lyricist-cf7c8.appspot.com",
   messagingSenderId: "609551362873"
 };
 firebase.initializeApp(config);

 var database = firebase.database();

 $("#signinbtn").on("click", function (event) {
   event.preventDefault();


   var email = $("#username").val().trim();
   var password = $("#password-input").val().trim();



   var signIn = {
       email: email,
       password: password,


   };
