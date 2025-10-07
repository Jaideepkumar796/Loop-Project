// 1️⃣ Sum of numbers from 1 to 10
function findSum() {
    let sum = 0;
    for (let i = 1; i <= 10; i++) {
        sum += i;
    }
    document.getElementById("sumResult").textContent = "Sum = " + sum;
}

// 2️⃣ Print even numbers from 1 to 10
function showEvenNumbers() {
    let evens = [];
    for (let i = 1; i <= 10; i++) {
        if (i % 2 === 0) evens.push(i);
    }
    document.getElementById("evenResult").textContent = "Even Numbers: " + evens.join(", ");
}

// 3️⃣ Multiplication table of 5
function tableOfFive() {
    let result = "";
    for (let i = 1; i <= 10; i++) {
        result += `5 x ${i} = ${5 * i}\n`;
    }
    document.getElementById("tableResult").textContent = result;
}

// 4️⃣ Reverse a string
function reverseString() {
    let input = "Rana";
    let reversed = "";
    for (let i = input.length - 1; i >= 0; i--) {
        reversed += input[i];
    }
    document.getElementById("reverseResult").textContent = `"${input}" → "${reversed}"`;
}

// 5️⃣ Reverse counting (10 to 1)
function reverseCounting() {
    let numbers = [];
    for (let i = 10; i >= 1; i--) {
        numbers.push(i);
    }
    document.getElementById("countResult").textContent = "Reverse Counting: " + numbers.join(", ");
}

// 6️⃣ Factorial of a number (5)
function findFactorial() {
    let num = 5;
    let fact = 1;
    for (let i = 1; i <= num; i++) {
        fact *= i;
    }
    document.getElementById("factorialResult").textContent = `Factorial of ${num} = ${fact}`;
}

// 7️⃣ Print all odd numbers from 1 to 20
function showOddNumbers() {
    let odds = [];
    for (let i = 1; i <= 20; i++) {
        if (i % 2 !== 0) odds.push(i);
    }
    document.getElementById("oddResult").textContent = "Odd Numbers: " + odds.join(", ");
}

// 8️⃣ Sum of all even numbers between 1 and 50
function sumEvenFifty() {
    let sum = 0;
    for (let i = 2; i <= 50; i += 2) {
        sum += i;
    }
    document.getElementById("evenSumResult").textContent = "Sum of Even Numbers (1–50): " + sum;
}

// 9️⃣ Square of numbers from 1 to 10
function showSquares() {
    let squares = [];
    for (let i = 1; i <= 10; i++) {
        squares.push(i * i);
    }
    document.getElementById("squareResult").textContent = "Squares: " + squares.join(", ");
}

// 🔟 Count vowels in a string
function countVowels() {
    let str = "Hello World";
    let count = 0;
    let vowels = "aeiouAEIOU";
    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) count++;
    }
    document.getElementById("vowelResult").textContent = `"${str}" → Vowels: ${count}`;
}