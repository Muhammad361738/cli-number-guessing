#!/usr/bin/env node

import inquirer from "inquirer";
// 1) computer will generate rendom number
// 2) Take a input from user
// 3) compare user input and computer generated number
const randomNumber = Math.floor(Math.random () * 6 + 1 );
const answers = await inquirer.prompt([
    {
        name : "userguessNumber",
        type : "number",
        message : "please guess a Number between 1-6 :",
    },
]);
if (answers.userguessNumber === randomNumber){
    console.log("Contratulations you guessed a rigt number");
} else {
    console.log("you gussed a wrong number");
}