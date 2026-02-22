// Initial Value
let count = 0;

// Display number
let numberDisplay = document.getElementById("number");

// Result text
let result = document.getElementById("result");


// Increment Function
function increment() {

    count++;

    numberDisplay.innerText = count;

    result.innerText = "Number Increased";

}


// Decrement Function
function decrement() {

    count--;

    numberDisplay.innerText = count;

    result.innerText = "Number Decreased";

}


// Check Even
function checkEven() {

    if (count % 2 === 0) {

        result.innerText = count + " is Even Number";

    } else {

        result.innerText = count + " is Not Even";

    }

}


// Check Odd
function checkOdd() {

    if (count % 2 !== 0) {

        result.innerText = count + " is Odd Number";

    } else {

        result.innerText = count + " is Not Odd";

    }

}