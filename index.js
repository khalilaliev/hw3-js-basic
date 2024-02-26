/// task 1 ///

const promptNumber = parseInt(prompt("Task 1: Enter any number:"));
if (promptNumber >= 10) {
  console.log("Task 1: You did it!");
} else {
  console.log("Task 1: You did smth wrong!");
}

/// task 2 ///

const password = 12345;
const isPassword = parseInt(prompt("Task 2: Enter a password:"));
if (isPassword === password) {
  console.log("Task 2: Welcome!");
} else {
  console.log("Task 2: Password is not correct!");
}

/// task 3 ///

const userMessage = prompt("Task 3: Leave any message:");
if (userMessage) {
  console.log("Task 3:", userMessage);
} else if (userMessage === null) {
  console.log("Task 3: Canceled input!");
} else if (userMessage === "") {
  console.log("Task 3: You havent written anything!");
}

/// task 4 ///

const firstNumber = parseInt(prompt("Task 4: Enter first number:"));
const secondNumber = parseInt(prompt("Task 4: Enter second number:"));

if (firstNumber > secondNumber) {
  console.log("Task 4: The first number is larger!");
} else if (firstNumber < secondNumber) {
  console.log("Task 4: The second number is larger!");
} else {
  console.log("Task 4: Number are the same!");
}

/// task 5 ///

const pairedUnpairedNumber = parseInt(
  prompt("Task 5: Enter any paired or unpaired number:")
);

if (pairedUnpairedNumber % 2 === 0) {
  console.log("Task 5: Paired number!");
} else if (pairedUnpairedNumber % 2 !== 0) {
  console.log("Task 5: Unpaired number!");
}

/// task 6 ///

const numberOfMonth = parseInt(prompt("Task 6: Enter a number of Month:"));

if (numberOfMonth >= 1 && numberOfMonth <= 12) {
  if (numberOfMonth >= 3 && numberOfMonth <= 5) {
    console.log("Task 6: Spring!");
  } else if (numberOfMonth >= 6 && numberOfMonth <= 8) {
    console.log("Task 6: Summer!");
  } else if (numberOfMonth >= 9 && numberOfMonth <= 11) {
    console.log("Task 6: Autumn!");
  } else {
    console.log("Task 6: Winter!");
  }
} else {
  console.log("Task 6: This month doesnt exist!");
}

/// task 7 ///

const numberInRange = parseInt(prompt("Task 7 - enter any number:"));

if (numberInRange >= 20 && numberInRange <= 80) {
  console.log("Task 7: A number in range!");
} else {
  console.log("Task 7: Smth goes wrong!");
}

/// task 8 ///

if (!(numberInRange < 20 || numberInRange > 80)) {
  console.log("Task 8: A number in range!");
} else {
  console.log("Task 8: Smth goes wrong!");
}

/// task 9 ///

const userAdmin = prompt("Who is there?");
const admin = "Admin";
const pass = "TheMaster";

if (userAdmin === null) {
  console.log("Canceled!");
} else if (userAdmin === "") {
  console.log("I dont know you!");
} else if (userAdmin === admin) {
  console.log("Keep going!");
  const userPass = prompt("Enter user password!");
  if (userPass === null) {
    console.log("Canceled!");
  } else if (userPass === "") {
    console.log("Wrong password!");
  } else if (userPass === pass) {
    console.log("Welcome!");
  } else {
    console.log("You have written wrong password!");
  }
} else {
  console.log("You have written wrong name!");
}
