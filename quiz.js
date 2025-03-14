const readline = require('readline-sync');  // Import readline-sync

// Step 1: Ask for the user's name
let name = readline.question("What is your name? ");
console.log(`Hello, ${name}! Let's start the quiz.\n`);

// Step 2: Initialize score
let score = 0;

// Step 3: Ask 5 questions
let q1 = readline.question("1. What data type is used for whole numbers in JavaScript? ");
if (q1.toLowerCase() === "number") { 
    console.log("Correct!"); 
    score++; 
} else { 
    console.log("Wrong! The correct answer is 'number'."); 
}

let q2 = readline.question("2. What symbol is used for multiplication in JavaScript? ");
if (q2 === "*") { 
    console.log("Correct!"); 
    score++; 
} else { 
    console.log("Wrong! The correct answer is '*'."); 
}

let q3 = readline.question("3. What keyword is used to declare a constant in JavaScript? ");
if (q3.toLowerCase() === "const") { 
    console.log("Correct!"); 
    score++; 
} else { 
    console.log("Wrong! The correct answer is 'const'."); 
}

let q4 = readline.questionInt("4. What is 5 + 3? ");  // This asks for a number
if (q4 === 8) { 
    console.log("Correct!"); 
    score++; 
} else { 
    console.log("Wrong! The correct answer is 8."); 
}

let q5 = readline.question("5. What is the result of '10' + 5 in JavaScript? ");
if (q5 === "105") { 
    console.log("Correct! JavaScript treats '10' as a string."); 
    score++; 
} else { 
    console.log("Wrong! The correct answer is '105' because JavaScript does string concatenation."); 
}

console.log(`\nQuiz completed, ${name}! Your final score is ${score}/5.`);
