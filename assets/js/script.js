// Display current day and date
var dayDisplay = $('#currentDay');
var todaysDate = moment().format('dddd, MMMM Do YYYY');
var dateContent = document.createTextNode(todaysDate);
dayDisplay.append(dateContent);

// THEN I am presented with timeblocks for standard business hours


// GLOBAL VARIABLES
var hourlyEl = document.getElementById('container');


function buildRows() {
    for( i = 0; i < 10; i++){
        // create the first column and populate with the hour
        var timeHour = document.createElement('div');
        timeHour.setAttribute('class', 'row timeblock hour');
        timeHour.setAttribute('id', 'h' + i + 'time');
        var eachHour = i + 8;
        timeHour.textContent = (eachHour + ":00");
        hourlyEl.appendChild(timeHour);
        // create the middle column and populate with a text area
        var eventDesc = document.createElement('textarea');
        eventDesc.setAttribute('class', 'row future');
        eventDesc.setAttribute('id', 'textarea' + i );
        hourlyEl.appendChild(eventDesc);
        // eventDesc.innerHTML = "<textarea>";


        
        // create the right column and populate with save button icon
        var saveBtn = document.createElement('button');
        saveBtn.setAttribute('class', 'row saveBtn');
        saveBtn.setAttribute('id', i);
        hourlyEl.appendChild(saveBtn);
        saveBtn.innerHTML = "<img src='assets/images/schedule-icon.png' width='50px' height='50px'>";
        saveBtn.addEventListener("click", function(){storeEventLocal(this.id)});
        var currentHour = moment().format('H');
        if( eachHour === currentHour ){
            eventDesc.removeAttribute('class', '.future');
            eventDesc.setAttribute('class', '.present');
        }
    }
}

// Store descriptions in localStorage
function storeEventLocal(btnId) {
    var textareaid = "textarea" + btnId;
    var textarea = document.getElementById(textareaid);
    localStorage.setItem(btnId, textarea.value);
}
function restoreEventDesc() {
    for( i = 0; i < 10; i++ ) {
        var eventDescText = localStorage.getItem(i);
        console.log(eventDescText);
        var textareaid = "textarea" + i;
        var textarea = document.getElementById(textareaid);
        textarea.value = eventDescText;
    }
}

// TO DO Add clear local button

// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future
// IF time block hour is before current time, change class from .future to .past
// IF time block hour && current time change class from .future to .present


// WHEN I click into a timeblock
// THEN I can enter an event


// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage


// EVENT LISTENERS
document.onload = buildRows(), restoreEventDesc();