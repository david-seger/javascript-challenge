// from data.js
var tableData = data;
// console.log(tableData);


// JavaScript Homework - JavaScript and DOM Manipulation

// Background
// WAKE UP SHEEPLE! The extra-terrestrial menace has come to Earth and we here at ALIENS-R-REAL have collected all of the eye-witness reports we could to prove it! All we need to do now is put this information online for the world to see and then the matter will finally be put to rest.
// There is just one tiny problem though... our collection is too large to search through manually. Even our most dedicated followers are complaining that they are having trouble locating specific reports in this mess.
// That's why we are hiring you. We need you to write code that will create a table dynamically based upon a dataset we provide. We also need to allow our users to filter the table data for specific values. There's a catch though... we only use pure JavaScript, HTML, and CSS, and D3.js on our web pages. They are the only coding languages which can be trusted.
// You can handle this... right? The planet Earth needs to know what we have found!

// Level 1: Automatic Table and Date Search (Required)
// Create a basic HTML web page or use the index.html file provided (we recommend building your own custom page!).
// Using the UFO dataset provided in the form of an array of JavaScript objects, write code that appends a table to your web page and then adds new rows of data for each UFO sighting.
// Make sure you have a column for date/time, city, state, country, shape, and comment at the very least.
// Use a date form in your HTML document and write JavaScript code that will listen for events and search through the date/time column to find rows that match user input.

let tableBody = d3.select("tbody");

function createUFOTable() {
    tableData.forEach(ufoSighting => {
        var row = tableBody.append("tr");
        row.append("td").text(ufoSighting.datetime);
        row.append("td").text(ufoSighting.city)
        row.append("td").text(ufoSighting.state)
        row.append("td").text(ufoSighting.country)
        row.append("td").text(ufoSighting.shape)
        row.append("td").text(ufoSighting.durationMinutes)
        row.append("td").text(ufoSighting.comments)
    });
};

// Create initial UFO Table

createUFOTable();

// Define filter button 

let filterButton = d3.select("#filter-btn");
// console.log(document.getElementById("filter-btn"));
// console.log(filterButton);
filterButton.on("click", ufoFiltering);

// Filter data table 
function dateFilter(dt) {
    let inputSearchDate = d3.select("#datetime");
    let inputSearchDateValue = inputSearchDate.property("value");
    if (inputSearchDateValue)
        return dt.datetime === inputSearchDateValue;  
    return true;
}

// This function is executed when the click filter button is pressed
function ufoFiltering() {
    console.log("Event Fired");
    d3.event.preventDefault();
    
    
    // Remove Table Body
    d3.select("tbody").selectAll("tr").remove();
    let ufoFilteredData = tableData.filter(dateFilter);


//    let ufoFilteredData = tableData.filter(function(dt){
//        console.log(dt.datetime);
//        return dt.datetime === inputSearchDateValue;});

    ufoFilteredData.forEach(ufoSighting => {
        var row = tableBody.append("tr");
        row.append("td").text(ufoSighting.datetime);
        row.append("td").text(ufoSighting.city)
        row.append("td").text(ufoSighting.state)
        row.append("td").text(ufoSighting.country)
        row.append("td").text(ufoSighting.shape)
        row.append("td").text(ufoSighting.durationMinutes)
        row.append("td").text(ufoSighting.comments)       
    });
};
