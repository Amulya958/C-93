// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyD1K-TGfTMBFLmm-MaiI4CikFuh6TgE5I0",
      authDomain: "kwitttttttttttteeeeerrrrrr.firebaseapp.com",
      projectId: "kwitttttttttttteeeeerrrrrr",
      storageBucket: "kwitttttttttttteeeeerrrrrr.appspot.com",
      messagingSenderId: "1095352680348",
      appId: "1:1095352680348:web:4a62ba1092562d7cd89259"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();

function logout_page()
{

window.location="index.html";

}