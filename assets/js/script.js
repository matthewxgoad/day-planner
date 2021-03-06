// GLOBAL VARIABLES

var dayDisplay = $('#currentDay');
var todaysDate = moment().format('dddd, MMMM Do YYYY');
var dateContent = document.createTextNode(todaysDate);
var hourlyEl = document.getElementById('container');
var currentHour = moment().format('H');
var clearBtn = $('.clearBtn');

// FUNCTIONS

// Build initial HTML rows
function buildRows() {
    for( i = 0; i < 10; i++){
        var eachHour = i + 8;
        // Create a wrapper to hold each row of the planner
        var wrapper = document.createElement('div');
        wrapper.setAttribute('id', 'h' + i + 'time');
        // Give it the time-block and row classes for styling and layout
        wrapper.setAttribute('class', 'time-block row')
        // create the first column and populate with the hour
        var timeHour = document.createElement('div');
        // Add hour and bootstrap grid classses
        timeHour.setAttribute('class', 'hour col-md-1');
        timeHour.textContent = (eachHour + ":00");
        wrapper.appendChild(timeHour);
        // create the middle column and populate with a text area
        var eventDesc = document.createElement('textarea');
        // Add styling and bootstrap grid classses
        eventDesc.setAttribute('class', 'description col-md-10 future');
        eventDesc.setAttribute('id', 'textarea' + i );
        wrapper.appendChild(eventDesc);
        // create the right column and populate with save button icon
        var saveBtn = document.createElement('button');
        // Add styling and bootstrap grid classes
        saveBtn.setAttribute('class', 'col-md-1 saveBtn');
        saveBtn.setAttribute('id', i);
        wrapper.appendChild(saveBtn);
        hourlyEl.appendChild(wrapper);
        // Add schedule icon to button
        saveBtn.innerHTML = "<img src='assets/images/schedule-icon.png' width='50px' height='50px'>";
        saveBtn.addEventListener("click", function(){storeEventLocal(this.id)});
    }
}
// Store descriptions in localStorage
function storeEventLocal(btnId) {
    var textareaid = "textarea" + btnId;
    var textarea = document.getElementById(textareaid);
    localStorage.setItem(btnId, textarea.value);
}
// Retreive descriptions from localStorage and insert into document
function restoreEventDesc() {
    for( i = 0; i < 10; i++ ) {
        var eventDescText = localStorage.getItem(i);
        var textareaid = "textarea" + i;
        var textarea = document.getElementById(textareaid);
        textarea.value = eventDescText;
    }
}
// Create interval to check time every 30 seconds
function initializeTimeEvent() {
    dayDisplay.append(dateContent);
    updateDescColor();
    timerIntervalId = setInterval( updateDescColor , 30000);
}
// Checks the current hour against the planner hour and updates class styling
function updateDescColor() {
    for( i = 0; i < 10; i++ ) {
        var textareaid = "textarea" + i;
        var eventDesc = document.getElementById(textareaid);
        var eachHour = i + 8;
        if( eachHour < currentHour ){
        // Remove and add classes from list whilst keeping class list otherwise intact
            eventDesc.classList.remove('future');
            eventDesc.classList.add('past');
        // Loose equality here because moment returns a string.    
        }else if( eachHour == currentHour ){
            eventDesc.classList.remove('future');
            eventDesc.classList.add('present');
        }
    } 
}
// Clear local storage events
function clearLocalStorage() {
    localStorage.clear();
    location.reload();
}

// EVENT LISTENERS
document.onload = buildRows(), restoreEventDesc(), initializeTimeEvent();
clearBtn.click(clearLocalStorage);

/* 
1. Don't forget to update README file
2. Clean up indentation
3. Add sufficient comments
*/