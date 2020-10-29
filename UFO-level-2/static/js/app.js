// from data.js
var tableData = data;
// console.log(tableData);


// JavaScript Homework - JavaScript and DOM Manipulation

// Using multiple input tags and/or select dropdowns, write JavaScript code so the user can to set multiple filters and search for UFO sightings using the following criteria based on the table columns:

// date/time
// city
// state
// country
// shape

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

// Filter data table by date

function dateFilter(dt) {
    let inputSearchDate = d3.select("#datetime");
    let inputSearchDateValue = inputSearchDate.property("value");
    
    if (inputSearchDateValue)
        return dt.datetime === inputSearchDateValue
    return true;
}

// Filter data table by City

function cityFilter(dt) {
    let inputSearchCity = d3.select("#city");
    let inputSearchCityValue = inputSearchCity.property("value");

    if (inputSearchCityValue)
        return dt.city === inputSearchCityValue
    return true;
}

// Filter data table by State

function stateFilter(dt) {
    let inputSearchState = d3.select("#state");
    let inputSearchStateValue = inputSearchState.property("value");

    if (inputSearchStateValue)
        return dt.state === inputSearchStateValue
    return true;
}

// Filter data table by Country

function countryFilter(dt) {
    let inputSearchCountry = d3.select("#country");
    let inputSearchCountryValue = inputSearchCountry.property("value");

    if (inputSearchCountryValue)
        return dt.country === inputSearchCountryValue
    return true;
}

// Filter data table by Shape

function shapeFilter(dt) {
    let inputSearchShape = d3.select("#shape");
    let inputSearchShapeValue = inputSearchShape.property("value");

    if (inputSearchShapeValue)
        return dt.shape === inputSearchShapeValue
    return true;
}

// This function is executed when the click filter button is pressed

function ufoFiltering() {
    console.log("Event Fired");

    // Prevent Page Refresh
    
    d3.event.preventDefault();
    
    // Remove Table Body
    
    d3.select("tbody").selectAll("tr").remove();

    // Filter Table based on selections
    
    let ufoFilteredData = tableData.filter(dateFilter);
    ufoFilteredData = ufoFilteredData.filter(cityFilter);
    ufoFilteredData = ufoFilteredData.filter(stateFilter);
    ufoFilteredData = ufoFilteredData.filter(countryFilter);
    ufoFilteredData = ufoFilteredData.filter(shapeFilter);

    // Reload Filtered Table
    
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
