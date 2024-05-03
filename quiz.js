#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
//Display a colourful welcome message
console.log(chalk.bold.cyanBright("\n \t\t Amashta Rehmani - Quiz Program "));
console.log("=".repeat(60));
const quiz = await inquirer.prompt([
    {
        name: "Question_1",
        type: "list",
        message: "What is TypeScript?",
        choices: ["Human Lamguage", "Programming Language", "Application Language"]
    },
    { name: "Question_2",
        type: "list",
        message: "What is High Level Programming Language?",
        choices: ["Only computer know", "Only human know", "Computer and Human both know"]
    },
    { name: "Question_3",
        type: "list",
        message: "Which command is use for making ts congfig file?",
        choices: ["tsc --init", "ts --init", "tsc -init"]
    },
    { name: "Question_4",
        type: "list",
        message: "Identify Case (cold Water?)",
        choices: ["Camelcase", "Lowercase", "Pascalcase"]
    },
    { name: "Question_5",
        type: "list",
        message: "Which of the following character is used in template literals ?",
        choices: ["#", "&", "$"]
    },
    { name: "Question_6",
        type: "list",
        message: "What is the use of inquirer ?",
        choices: ["Taking input from user", "Put values", "Make variables"]
    },
    { name: "Question_7",
        type: "list",
        message: "Which datatype is used for text ?",
        choices: ["Boolean", "Any", "String"]
    },
    { name: "Question_8",
        type: "list",
        message: "Which of the following operator is used to check if two values are not equal in typeScript?",
        choices: ["a = b", "a != b", "a === b"]
    },
    { name: "Question_9",
        type: "list",
        message: "For generate random number in typescript we use?",
        choices: ["Math.split", "Math.floor", "Math.random"]
    },
    { name: "Question_10",
        type: "list",
        message: "Which of the following method is for remove elements in  typescript array ?",
        choices: ["Push", "Split", "Pop"]
    }
]);
let score = 0;
switch (quiz.Question_1) {
    case "Programming Language":
        console.log("1. Correct");
        ++score;
        break;
    default:
        console.log("1. Inorrect");
}
switch (quiz.Question_2) {
    case "Computer and Human both know":
        console.log("2. Correct");
        ++score;
        break;
    default:
        console.log("2. Inorrect");
}
switch (quiz.Question_3) {
    case "tsc --init":
        console.log("3. Correct");
        ++score;
        break;
    default:
        console.log("3. Inorrect");
}
switch (quiz.Question_4) {
    case "Camelcase":
        console.log("4. Correct");
        ++score;
        break;
    default:
        console.log("4. Inorrect");
}
switch (quiz.Question_5) {
    case "$":
        console.log("5. Correct");
        ++score;
        break;
    default:
        console.log("5. Inorrect");
}
switch (quiz.Question_6) {
    case "Taking input from user":
        console.log("6. Correct");
        ++score;
        break;
    default:
        console.log("6. Inorrect");
}
switch (quiz.Question_7) {
    case "String":
        console.log("7. Correct");
        ++score;
        break;
    default:
        console.log("7. Inorrect");
}
switch (quiz.Question_8) {
    case "a != b":
        console.log("8. Correct");
        ++score;
        break;
    default:
        console.log("8. Inorrect");
}
switch (quiz.Question_9) {
    case "Math.random":
        console.log("9. Correct");
        ++score;
        break;
    default:
        console.log("9. Inorrect");
}
switch (quiz.Question_10) {
    case "Pop":
        console.log("10. Correct");
        ++score;
        break;
    default:
        console.log("10. Inorrect");
}
console.log(`Score: ${score}`);
