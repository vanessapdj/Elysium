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

// //Countdown Timer Function
// function updateCountdown() {
//    const eventDate = new Date("December 31, 2024 23:59:59").getTime();
//    const now = new Date().getTime();
//    const distance = eventDate - now;

//    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
//    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

//    document.getElementById('countdown').innerHTML = days + "d " + hours + "h "
//    + minutes + "m " + seconds + "s ";

//    if (distance < 0) {
//        clearInterval(x);
//        document.getElementById('countdown').innerHTML = "EXPIRED";
//    }
// }
// //Set interval to update countdown every second
// setInterval(updateCountdown, 1000);

function handleSelectionChange() {
    var select = document.getElementById('Destinationdropdown');
    var selectedValues = Array.from(select.selectedOptions).map(option => option.value);
    console.log('Selected Values:', selectedValues);
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

document.addEventListener('DOMContentLoaded', function() {
    addFlightSegment();  // Add the first segment by default
});

function addFlightSegment() {
    const container = document.getElementById('flightSegments');
    const index = container.children.length + 1;
    const segment = document.createElement('div');
    segment.innerHTML = `
        <strong>Segment ${index}</strong><br>
        Departure City: <input type="text" name="departureCity${index}" required>
        Destination City: <input type="text" name="destinationCity${index}" required>
        Date: <input type="date" name="date${index}" required>
        Time: <input type="time" name="timeofflight${index}" required>
        <button type="button" onclick="removeFlightSegment(this)">Remove Segment</button>
    `;
    container.appendChild(segment);
}

function removeFlightSegment(button) {
    button.parentElement.remove();
}

document.getElementById('itineraryForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting traditionally
    // Gather all data here and possibly make an API call or form submission
    console.log('Form submitted. Handle accordingly.');
});

document.addEventListener('DOMContentLoaded', function() {
    addTravelDay();  // Add the first day by default
});

function addTravelDay() {
    const container = document.getElementById('travelDays');
    const dayIndex = container.children.length + 1;
    const dayDiv = document.createElement('div');
    dayDiv.classList.add('day-section');
    dayDiv.innerHTML = `
        <h3>Day ${dayIndex}</h3>
        Date: <input type="date" name="date${dayIndex}" required>
        <div class="activities">
            <button type="button" onclick="addActivity(this.parentNode)">Add Activity</button>
        </div>
    `;
    container.appendChild(dayDiv);
}

function addActivity(activityContainer) {
    const activityIndex = activityContainer.querySelectorAll('.activity').length + 1;
    const activityDiv = document.createElement('div');
    activityDiv.classList.add('activity');
    activityDiv.innerHTML = `
        Activity ${activityIndex}: <input type="text" name="activity${activityIndex}" placeholder="Enter activity details" required>
        <button type="button" onclick="this.parentNode.remove()">Remove Activity</button>
    `;
    activityContainer.insertBefore(activityDiv, activityContainer.lastChild);

    document.getElementById('eventForm').style.display = 'block';
}

document.getElementById('itineraryForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent traditional form submission
    // Gather all data here and handle accordingly
    console.log('Itinerary submitted. Handle accordingly.');
});


document.addEventListener('DOMContentLoaded', function() {
    const reservationCheckbox = document.getElementById('reservation');
    const checklistDiv = document.getElementById('checklistItems');

    reservationCheckbox.addEventListener('change', function() {
        if (this.checked) {
            // Add an item to the checklist and ensure it's visible
            const li = document.createElement('li');
            li.textContent = 'Booking needed for ' + document.getElementById('events').value;
            document.getElementById('checklistItems').appendChild(li);
            checklistDiv.style.display = 'block'; // Make sure to show the checklist
        } else {
            // Optionally, hide the checklist if no items are needed
            document.getElementById('checklistItems').innerHTML = ''; // Clear the list
            checklistDiv.style.display = 'none'; // Hide if not needed
        }
             // If unchecked, remove from the checklist
            const itemToRemove = document.getElementById('checklistItems');
            if (itemToRemove) {
            checklistItems.removeChild(itemToRemove);
                    }
    });
});