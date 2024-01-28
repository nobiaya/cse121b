/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = 'Obicheozo Lily Nkeiruka';
let currentYear = new Date().getFullYear();
let profilePicture = 'images/lily.jpg';

/* Step 3 - Element Variables */
const nameElement = document.getElementById("name");
console.log(nameElement.textContent);

const foodElement = document.getElementById("food");
console.log(foodElement.innerHTML);

const yearElement = document.querySelector("#year");
console.log(yearElement.textContent);

const imageElement = document.getElementById("img");
console.log(imageElement.src);

/* Step 4 - Adding Content */
// Surround the fullName with <strong> tags and assign it to the innerHTML property
nameElement.innerHTML = "<strong>" + fullName + "</strong>";

// Set the textContent of the element to the value of the currentYear variable
yearElement.textContent = currentYear;

// Set the src attribute of the image element to the value of the profilePicture variable
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', 'profile image of ${fullName}');

/* Step 5 - Array */
// Declare an array variable to hold your favorite foods
let favFoods = ["Yam", "Beans", "Plantain", "Rice"];

// Modify the HTML element with the id of food to display your favorite foods array
foodElement.textContent = favFoods.join(", ");

//Declare and instantiate a variable to hold another single favorite food item.
let singleFavoriteFood = "Pizza";

// Add the value from singleFavoriteFood to the favFoods array
favFoods.push(singleFavoriteFood);
console.log(favFoods);

// Append the array values to the content of the HTML element with line breaks
foodElement.innerHTML = favFoods.join("<br>");

// Removed the first element from the favoriteFoods array
favFoods.shift();

console.log(favFoods);

// Append the modified array values to the content of the HTML element with line breaks
foodElement.innerHTML = favFoods.join("<br>");

// Removed the last element from the favFoods array
favFoods.pop();

console.log(favFoods);

// Append the final modified array values to the content of the HTML element with line breaks
foodElement.innerHTML = favFoods.join("<br>");