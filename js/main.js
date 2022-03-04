"use strict"

//--- this allows html to be written in js
//    header-3 and paragraph of the name and roast is placed here
function renderCoffee(coffee) {
    var html = '<div class="coffee d-inline-flex flex-column flex-lg-row col-12 col-lg-6 justify-content-center">';
    // html += '<td>' + coffee.id + '</td>';                                        Hides the ID in the DOM
    html += '<h3 class="text-capatalize ">' + coffee.name + '</h3>';
    html += '<p class="text-secondary pt-2">' + coffee.roast + '</p>';
    html += '</div>';
    return html;
}

//--- runs through the list of coffee
function renderCoffees(coffees) {
    var html = '';
    for(var i = coffees.length - 1; i >= 0; i--) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

//---   captures the value of the input for drop down for searching by roast.
//      then adds it to a new object to display the selected few.

function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (coffee.roast === selectedRoast) {  //This checks to see if the value is matching the coffee roast in the object.
            filteredCoffees.push(coffee);
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}

//---   TEAM WORK Code


var searchName = document.getElementById("coffeeName"); // Grab search bar in the DOM

//--    captures the value of input for searchName (l-41)
//      and just like the previous function (l-26) we created a new object to keep track of the new updated list
//      running a for loop through each coffee name and check to see if coffeeName includes the value input (l-48).
function searchTypeName(e){
    e.preventDefault(); // don't submit the form, we just want to update the data
    const value = searchName.value.toLowerCase();
    var newListCoffee = [];
    for(var i = 0;i<coffees.length;i++){
        if(coffees[i].name.toLowerCase().includes(value)){
            newListCoffee.push(coffees[i])
            tbody.innerHTML = renderCoffees(newListCoffee);
        }
    }
}
//---
searchName.addEventListener("input", searchTypeName);


// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];

var tbody = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');

tbody.innerHTML = renderCoffees(coffees);

submitButton.addEventListener('click', updateCoffees);



var CoffeeType = document.getElementById('roast-selection-2')
var CoffeeName = document.getElementById('addCoffeeName');
var submitButton2 = document.querySelector('#submit-2');

function addButton(e){
    e.preventDefault(); // don't submit the form, we just want to update the data
    var valueCoffeeType = CoffeeType.value;
    var valueCoffeeName = CoffeeName.value;
    var wow = coffees.length + 1;
    console.log(wow, valueCoffeeName, valueCoffeeType)
    let newCoffee = {
        id: wow,
        name: valueCoffeeName.charAt(0).toUpperCase() + valueCoffeeName.slice(1),
        roast:valueCoffeeType
    }
    coffees.push(newCoffee);
    tbody.innerHTML = renderCoffees(coffees);
}

submitButton2.addEventListener('click', addButton);

