/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */

// Function declaration for the add function
function add(number1, number2) {
    // Function logic: simply adding the two numbers
    return number1 + number2;
  }

// Function declaration for the addNumbers function
function addNumbers() {
  // Get the values of the HTML form controls with IDs "add1" and "add2"
  const input1 = document.getElementById("add1");
  const input2 = document.getElementById("add2");

  // Convert the input values to numbers
  const number1 = parseFloat(input1.value);
  const number2 = parseFloat(input2.value);

  // Check if the values are valid numbers
  if (isNaN(number1) || isNaN(number2)) {
    alert("Please enter valid numbers.");
    return; // Exit the function if values are not valid
  }

  // Calculate the sum of the two numbers
  const sum = number1 + number2;

  // Assign the sum to an HTML form element with ID "sum"
  document.getElementById("sum").value = sum;

  // Display the result 
  alert(`The sum of ${number1} and ${number2} is: ${sum}`);
  console.log(sum);

}

// Adding a "click" event listener to the button with ID "addNumbers"
document.getElementById("addNumbers").addEventListener("click", addNumbers);

/* Function Expression - Subtract Numbers */

function subtract1(number1, number2) {
  // Function logic: simply subtracting the two numbers
  return number1 - number2;
}

// Function declaration for the subtractNumbers function
function subtractNumbers() {
// Get the values of the HTML form controls with IDs "subtract1" and "subtract2"
const input1 = document.getElementById("subtract1");
const input2 = document.getElementById("subtract2");

// Convert the input values to numbers
const number1 = parseFloat(input1.value);
const number2 = parseFloat(input2.value);

// Check if the values are valid numbers
if (isNaN(number1) || isNaN(number2)) {
  alert("Please enter valid numbers.");
  return; // Exit the function if values are not valid
}

// Calculate the subtract of the two numbers
const df = number1 - number2;

// Assign the subtract to an HTML form element with ID "difference"
document.getElementById("difference").value = df;

// Display the result 
alert(`The difference of ${number1} and ${number2} is: ${df}`);
console.log(df);

}

// Adding a "click" event listener to the button with ID "subtractNumbers"
document.getElementById("subtractNumbers").addEventListener("click", subtractNumbers);

/* Arrow Function - Multiply Numbers */

// Arrow function for the multiply function
const multiply = (factor1, factor2) => factor1 * factor2;

// Arrow function for the multiplyNumbers function
const multiplyNumbers = () => {
  // Get the values of the HTML form controls with IDs "factor1" and "factor2"
  const input1 = document.getElementById("factor1");
  const input2 = document.getElementById("factor2");

  // Convert the input values to numbers
  const factor1 = parseFloat(input1.value);
  const factor2 = parseFloat(input2.value);

  // Check if the values are valid numbers
  if (isNaN(factor1) || isNaN(factor2)) {
    alert("Please enter valid numbers.");
    return; // Exit the function if values are not valid
  }

  // Call the multiply function with the two factors
  const product = multiply(factor1, factor2);

  // Assign the product to an HTML form element with ID "product"
  document.getElementById("product").value = product;

  // Display the result 
alert(`The product of ${factor1} and ${factor2} is: ${product}`);
console.log(product);

};

// Adding a "click" event listener to the button with ID "multiplyNumbers"
document.getElementById("multiplyNumbers").addEventListener("click", multiplyNumbers);

/* Open Function Use - Divide Numbers */

// Function declaration for the divide function
function divide(dividend, divisor) {
  return dividend / divisor;
}

// Function expression for the divideNumbers function
const divideNumbers = function () {
  // Get the values of the HTML form controls with IDs "dividend" and "divisor"
  const inputDividend = document.getElementById("dividend");
  const inputDivisor = document.getElementById("divisor");

  // Convert the input values to numbers
  const dividend = parseFloat(inputDividend.value);
  const divisor = parseFloat(inputDivisor.value);

  // Check if the values are valid numbers and if the divisor is not zero
  if (isNaN(dividend) || isNaN(divisor) || divisor === 0) {
    alert("Please enter valid numbers, and make sure the divisor is not zero.");
    return; // Exit the function if values are not valid
  }

  // Call the divide function with the two numbers
  const quotient = divide(dividend, divisor);

  // Assign the quotient to an HTML form element with ID "quotient"
  document.getElementById("quotient").value = quotient;
  alert(`The quotient of ${dividend} and ${divisor} is: ${quotient}`);
  console.log(quotient);

};

// Adding a "click" event listener to the button with ID "divideNumbers"
document.getElementById("divideNumbers").addEventListener("click", divideNumbers);

/* Decision Structure */
document.getElementById("getTotal").addEventListener("click", function() {
  // Retrieve the numeric value entered by the user in the subtotal field
  const subtotalInput = document.getElementById("subtotal").value;
  
  // Declare and instantiate a variable to store the numeric value
  const subtotal = parseFloat(subtotalInput);

  // Retrieve whether the user is a club member
  const isClubMember = document.getElementById("member").checked;

  // Calculate total based on club membership and apply discount if checked
  const discount = isClubMember ? 0.2 : 0; // 20% discount if club member
  const total = subtotal - subtotal * discount;

  // Display the calculated total in the "Total" span
  document.getElementById("total").textContent = `$ ${total.toFixed(2)}`;
});

/* ARRAY METHODS - Functional Programming */

    const numbersArray = Array.from({ length: 13 }, (_, index) => index + 1);

    // Assign the value of the array to the HTML element with ID "array"
    document.getElementById("array").textContent = numbersArray.join(', ');

    // Use the filter() method to find all odd numbers
    const oddNumbers = numbersArray.filter(number => number % 2 !== 0);
    document.getElementById("odds").textContent = oddNumbers.join(', ');

    // Use the filter() method to find all even numbers
    const evenNumbers = numbersArray.filter(number => number % 2 === 0);
    document.getElementById("evens").textContent = evenNumbers.join(', ');

    // Use the reduce() method to sum the array elements
    const sum = numbersArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    document.getElementById("sumOfArray").textContent = `Sum: ${sum}`;

    // Use the map() method to create an array with each element multiplied by 2
    const multipliedArray = numbersArray.map(number => number * 2);
    document.getElementById("multiplied").textContent = multipliedArray.join(', ');

    // Use the reduce() method to sum the elements of the multiplied array
    const sumOfMultiplied = multipliedArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    document.getElementById("sumOfMultiplied").textContent = `Sum: ${sumOfMultiplied}`;


/* Output Source Array */
console.log(numbersArray);

/* Output Odds Only Array */
console.log(oddNumbers);

/* Output Evens Only Array */
console.log(evenNumbers);

/* Output Sum of Org. Array */
console.log(sum);

/* Output Multiplied by 2 Array */
console.log(multipliedArray);


/* Output Sum of Multiplied by 2 Array */
console.log(sumOfMultiplied);