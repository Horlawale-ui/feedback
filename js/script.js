  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyAdGpw0_6SUZqt1fLayBkG9Rvu2ahce1g8",
    authDomain: "coperate-comms.firebaseapp.com",
    projectId: "coperate-comms",
    storageBucket: "coperate-comms.appspot.com",
    messagingSenderId: "384278632531",
    appId: "1:384278632531:web:a5bed6f10dbe28b1b38ea6",
    measurementId: "G-8EGV182CF9"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

//Reference response collection
var responseRef = firebase.database().ref("responses");

//listen for submit form
document.getElementById("contact-form").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  //Get values

  let experience = document.querySelector('input[name="experience"]:checked');
  if(experience != null) {   
    experienceValue = experience.value;  
  }else{
    experienceValue = "null";
  };
  var info = getInputVal("info");
  let rating = document.querySelector('input[name="rating"]:checked');
  if(rating != null) {   
    ratingValue = rating.value;  
  }else{
    ratingValue = "null";
  };
  var info2 = getInputVal("info2");
  var info3 = getInputVal("info3");
  //save response
  saveresponse(
    experienceValue,
    ratingValue,
    info,
    info2,
    info3
  );
// Show alert
document.getElementById('alert-msg').style.display = 'block';
    
// Hide alert after 3 seconds
setTimeout(function(){
   document.getElementById('alert-msg').style.display = 'none'; 
}, 3000);

// Clear form after submit
    document.getElementById('contact-form').reset();
}

//function to get form values
function getInputVal(id) {
  return document.getElementById(id).value;
}
// Save response to firebase
function saveresponse(
  experienceValue,
  ratingValue,
  info,
  info2,
  info3
) {
  var newresponseRef = responseRef.push();
  newresponseRef.set({
    Experience: experienceValue,
    Eventrating: ratingValue,
    EventFeedback: info,
    Eventlikes: info2,
    Eventshare: info3,
  });
}
