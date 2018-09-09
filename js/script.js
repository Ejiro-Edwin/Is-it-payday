let message = null;
let d = new Date();
let today = d.getDate(); // return the day of the month as a number 0-30
let month = d.getMonth(); // return month as a number 0-11
let year = d.getFullYear();
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
let payDay = document.getElementById("PayDay");

// used to calculate the last day of month -- especially helpful for February
let lastday = function(y,m){
return  new Date(y, m +1, 0).getDate();
}

// Is today's date the 15 or the last day of the month? If yes...

if ( today == 15 || today == lastday(year,month)) {
	message = "Yay! It's Payday!";
}

// If not...

else {
	message = "Boo. Today is not payday :(";
}

// Defining the proper ordinalIndicator for today's date

let ordinalIndicator = null;

if ( today == 1 || today == 21 || today == 31) {
	ordinalIndicator = "st";
} else if ( today == 2 || today == 22) {
	ordinalIndicator = "nd";
} else {
	ordinalIndicator = "th";
}

let datemessage = ("Today is the " + today + ordinalIndicator + " of " + months[month] + ". "); // months[month] displays today's date

// Display message

payDay.innerText = datemessage + message;
