'use strict'

console.log('ex01 quadratic equation')



// Your tasks: 
// Example: for the following equation: 2X² – 5x + 2 = 0
// Your inputs are: a=2, b=-5, c=2 
// your output to the console should be:
// 2X² – 5x + 2 = 0
// x1 = 2 ; x2 = 0.5

// Read 3 variables from the user: a, b, c.
//  These will be the a, b, c variables of a quadratic equation.
var a = +prompt('a?')
var b = +prompt('b?')
var c = +prompt('c?')

// Calculations for the solution of the quadratic equation:
console.log('a is ', a,'b is ', b,'c is ', c)

// • Print to the console the value of “-b”
console.log('-b:', -b)

// • Print to the console the value of “2*a”
console.log('2a:', 2*a)

// • Print to the console the value of the discriminant -
//  Discriminant=b*b-4*a*c
var discriminant = (b**2 - 4*a*c)
console.log('discriminant:', discriminant)


// • Print the quadratic equation as a string to the console
if (b > 0) b = '+' + b
if (c > 0) c = '+' + c
var quadraticEquation = a + 'x\u00B2' + b + 'x' + c + ' = 0'
console.log('quadraticEquation -', '\n' ,quadraticEquation)

// • Print the solutions of X1 and X2 to the console.
var x1 = ((-b + Math.sqrt(discriminant)) / (2*a))
console.log('x1 :>> ', x1)
var x2 = ((-b - Math.sqrt(discriminant)) / (2*a))
console.log('x2 :>> ', x2)

