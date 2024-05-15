/*
function askForName() {
   var promptMessage = "What is your name?";
   var yourName = prompt(promptMessage);
}

console.log(askForName)
*/

/* var yourName = prompt("What is your name?");
var firstChar = yourName.slice(0,1);
var upperCasefirstChar = firstChar.toUpperCase();
var restOfName = yourName.slide(1,yourName.length);
restOfName = restOfName.toLowerCase();
var capitalisedName = upperCasefirstChar + restOfName;
alert ("Welcome " + capitalisedName + "!" );
*/

/*function validateForm () {
    var input = document.getElementById ("email").value;
   
    if (!input.includes("@")) {
        alert("Invalid email address!");
        return false;
    } else {
    return true;
    }
 } */

 /*function displayRandomLocation() {
   var location = ["Tokyo Japan", "Vienna Austria", "Greece", "Paris France", "Finland", "Bora Bora", "Sister's Island", "Maldives", "Slovenia", "Amalfi Coast Italy", "Bali"];
   var randomIndex = Math.floor(Math.random() * location.length);
   document.getElementById("location").textContent = location[randomIndex];
}
*/

/*function scrollToTop() {
   window.scrollTo({ top: 0, behavior: "smooth" });
}
*/

/* Most used types, to see examples from Chatgpt?
getElementById() - get references to the input field, button, and list elements 
addEventListener() - attach an event listener 
appendChild() - add new elements to a list/array
*/

// Countdown Timer Function
function updateCountdown() {
   const eventDate = new Date("December 31, 2024 23:59:59").getTime();
   const now = new Date().getTime();
   const distance = eventDate - now;

   const days = Math.floor(distance / (1000 * 60 * 60 * 24));
   const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
   const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
   const seconds = Math.floor((distance % (1000 * 60)) / 1000);

   document.getElementById('countdown').innerHTML = days + "d " + hours + "h "
   + minutes + "m " + seconds + "s ";

   if (distance < 0) {
       clearInterval(x);
       document.getElementById('countdown').innerHTML = "EXPIRED";
   }
}

// Set interval to update countdown every second
setInterval(updateCountdown, 1000);

function handleSelectionChange() {
    var select = document.getElementById('Destinationdropdown');
    var selectedValues = Array.from(select.selectedOptions).map(option => option.value);
    console.log('Selected Values:', selectedValues);

    // Optionally, perform actions based on the selected values
    // For example, updating UI elements based on selection
}

//Set dynamic dropdown list
document.addEventListener('DOMContentLoaded', function() {
   var selectElement = document.getElementById('Destinationdropdown');

   selectElement.addEventListener('change', function()
    {
      console.log('Value changed:', this.value);
      var selectedDestination = this.value.replace(/\s+/g, '');  // Remove spaces for image filenames

      var values = Array.from(selectElement.selectedOptions).map(option => option.value);
      console.log(values); // Log selected values to the console

       // Example: Changing an image based on the selection
       var imageElement = document.getElementById('destinationImage');
       if (imageElement) {
           imageElement.src = './images/' + selectedDestination + '.webp';
           imageElement.alt = selectedDestination;
       }

       // Example: Updating text content
       var descriptionElement = document.getElementById('destinationDescription');
       if (descriptionElement) {
           descriptionElement.textContent = 'You selected ' + selectedDestination;
       }
    });
});

// document.getElementById('destinationForm').addEventListener('submit', function(event) {
//     event.preventDefault(); // Prevent the form from submitting in the traditional way

//     var select = document.getElementById('Destinationdropdown');
//     console.log(select);

//     // You can also do something with these values, like sending them to a server
// });