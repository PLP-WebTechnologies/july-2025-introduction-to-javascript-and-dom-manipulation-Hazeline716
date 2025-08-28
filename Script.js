/**
 * This script demonstrates key JavaScript concepts including variable declarations, conditionals,
 * custom functions, loops, and Document Object Model (DOM) interactions.
 */

// Part 1: Variable Declarations and Conditionals
//-------------------------------------------------------------------------------------------
console.log("--- Part 1: Variables and Conditionals ---");

// Declare a mix of variables with different data types
let greetingMessage = "Hello, Web Project!";
const userRole = "guest";
let isLoggedIn = true;
let userCount = 15;

console.log(`Message: ${greetingMessage}`);
console.log(`User is logged in: ${isLoggedIn}`);
console.log(`Total users online: ${userCount}`);

// Use a conditional statement to check the user's status
if (isLoggedIn) {
    console.log("The user is currently logged in.");
    if (userRole === "admin") {
        console.log("Welcome, Administrator!");
    } else {
        console.log("Welcome, User!");
    }
} else {
    console.log("The user is not authenticated.");
}

// Part 2: Custom Functions
//-------------------------------------------------------------------------------------------
console.log("\n--- Part 2: Custom Functions ---");

// Function 1: A simple utility function to add two numbers
function addNumbers(a, b) {
    return a + b;
}

// Function 2: A function that interacts with the DOM to update an element's content
function updateContent(elementId, newText) {
    const element = document.getElementById(elementId);
    if (element) {
        element.textContent = newText;
        console.log(`Content of element with ID '${elementId}' has been updated.`);
    } else {
        console.error(`Error: Element with ID '${elementId}' not found.`);
    }
}

// Call the utility function and log the result
let sum = addNumbers(10, 5);
console.log(`The sum of 10 and 5 is: ${sum}`);


// Part 3: Loop Examples
//-------------------------------------------------------------------------------------------
console.log("\n--- Part 3: Loop Examples ---");

// Example 1: A 'for' loop to iterate a set number of times
let loopOutput = "For Loop: ";
for (let i = 0; i < 3; i++) {
    loopOutput += `Iteration ${i + 1}, `;
}
console.log(loopOutput);

// Example 2: A 'forEach' loop to iterate over an array
const fruits = ["Apple", "Banana", "Cherry"];
let fruitList = "Fruits: ";
fruits.forEach(function(fruit, index) {
    fruitList += `${fruit} (Index ${index}), `;
});
console.log(fruitList);

// Part 4: DOM Interactions
//-------------------------------------------------------------------------------------------
console.log("\n--- Part 4: DOM Interactions ---");

// Interaction 1: Get an element from the DOM
const actionButton = document.getElementById("actionButton");
const dynamicBox = document.getElementById("dynamicContent");
const loopOutputElement = document.getElementById("loopOutput");

// Interaction 2: Add an event listener to the button
actionButton.addEventListener("click", function() {
    console.log("Button was clicked!");
    
    // Interaction 3: Change the text content of the dynamic box
    updateContent("dynamicContent", "The button was clicked! The content has been changed by JavaScript.");
    
    // Interaction 4: Change the style of the dynamic box
    dynamicBox.style.backgroundColor = "#c7d2fe"; // Change background color to a lighter indigo
    dynamicBox.style.transform = "scale(1.05)";
    setTimeout(() => {
        dynamicBox.style.transform = "scale(1)";
    }, 300); // A small animation to show the change

    // Display loop results on the page
    let outputString = "For Loop: ";
    for (let i = 0; i < 3; i++) {
        outputString += `Iteration ${i + 1}, `;
    }
    outputString += `<br>Fruits: `;
    fruits.forEach((fruit, index) => {
        outputString += `${fruit} (Index ${index}), `;
    });
    loopOutputElement.innerHTML = outputString;
});

// Initial function call to set some content
updateContent("dynamicContent", "Click the button below to see the content change!");

