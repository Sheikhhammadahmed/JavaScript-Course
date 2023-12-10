// Loops 

/* 
for loop
while loop
do while loop
*/

/*
for loop has 3 stages:
1- Initialization.
2- Condition Checking.
3- Increment/ Decrement.
*/

// Basic Syntax

for (var i = 1; i <= 10; i++) {
    document.write(`${i} - JavaScript <br>`)
}

// This loop prints JavaScript 10 times with line breaks.

// Task: = Print Table by taking prompt by user.

var userInp = prompt('Enter Number')
var length = prompt('Enter Length')

for (var i = 1; i <= length; i++) {
    document.write(`${userInp} x ${i} = ${userInp * i} <br>`)
}


// Javascript falsy values:

false
null
undefined
0
""
NaN 