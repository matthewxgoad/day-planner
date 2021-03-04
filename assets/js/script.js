// Display current day and date
var dayDisplay = $('#currentDay');
var todaysDate = moment().format('dddd, MMMM Do YYYY');
var dateContent = document.createTextNode(todaysDate);
dayDisplay.append(dateContent);

// TO DO add time blocks from jquery UI