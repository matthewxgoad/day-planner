// Display current day and date
var dayDisplay = $('#currentDay');
var todaysDate = moment().format('dddd, MMMM Do YYYY');
var dateContent = document.createTextNode(todaysDate);
dayDisplay.append(dateContent);

// THEN I am presented with timeblocks for standard business hours

var hourlyEl = document.getElementById('container');

for( i = 0; i < 10; i++){
    // create the first column and populate with the hour
    var timeHour = document.createElement('div');
    timeHour.setAttribute('class', 'row timeblock hour');
    timeHour.setAttribute('id', 'h' + i + 'time');
    var eachHour = i + 7;
    timeHour.textContent = (eachHour + ":00");
    hourlyEl.appendChild(timeHour);
    // create the middle column and populate with a text area
    var eventDesc = document.createElement('div');
    eventDesc.setAttribute('class', 'row future');
    eventDesc.setAttribute('id', 'h' + i + 'desc');
    hourlyEl.appendChild(eventDesc);
    eventDesc.innerHTML = "<textarea>";
    // create the right column and populate with save button icon
    var saveBtn = document.createElement('div');
    saveBtn.setAttribute('class', 'row saveBtn');
    saveBtn.setAttribute('id', 'h' + i + 'btn');
    hourlyEl.appendChild(saveBtn);
    saveBtn.innerHTML = "<img src='assets/images/schedule-icon.png' width='50px' height='50px'>";
    var currentHour = moment().format('H');
    if( eachHour === currentHour ){
        eventDesc.removeAttribute('class', '.future');
        eventDesc.setAttribute('class', '.present');
    }
    // else( eachHour < moment().format('H')){
    //     eventDesc.removeAttribute('class', '.future');
    //     eventDesc.setAttribute('class', '.past');
    // }

}
// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future
// IF time block hour is before current time, change class from .future to .past
// IF time block hour && current time change class from .future to .present


// WHEN I click into a timeblock
// THEN I can enter an event


// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage