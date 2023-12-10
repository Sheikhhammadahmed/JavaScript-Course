// Chap : Arrays

// Array is a collection of data with different data types.

// Array Methods: 
// Array has 6 basic methods.

/*
1- push();    adds value in end of index.
2- pop();     removes the last value of index.
3- shift();   removes the first value of index.
4- unshift(); add the value in start of index.
5- slice();   copy the values of index.
6- splice();  Add/Remove in the middle of index.

*/

// for getting any value to the DOM.
var arr = ["hammad", 21, 'CSC - 2001', true, undefined, false, 20.12]
// document.write(arr[6])








// Code by Sir Saad---------

var arr = []
arr[0] = 'Ali'
arr[2] = 1
// document.write(arr[1]) /*undefined*/



var arr = ['true','false',20,'Ali',undefined,'hello',12.2,false]
var arr2 = arr.slice(0,3)

document.write(arr2)



arr.pop() 
arr.push('0')
arr.shift() // f,2,a,u,h,12,0
arr.pop() 
arr.pop() // f,2,a,u,h
arr.unshift(arr[2],'updated') // a,u,f,2,a,u,h
arr.splice(1) // a
arr.push('new') // a,n

// document.write(arr)
