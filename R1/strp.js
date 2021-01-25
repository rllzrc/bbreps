const _ = require('lodash');

function sayHello() {
  console.log('Hello, World');
}

_.times(5, sayHello);


// Part 1
// For this interview, imagine that we are working with a simple database. Each row
// associates column names (strings) with integer values (for example: 5, 0, -3,
// and so on). Here's a table with three rows:
 
//  a   b   c   d
// ---------------
//  1   0   0   0
//  0   2   3   0
//  0   0   0   4
 
// We can choose to represent a database table in JSON as an array of objects. For
// example, the previous table could be written as:
 
// [ {"a": 1, "b": 0, "c": 0, "d": 0},
//   {"a": 0, "b": 2, "c": 3, "d": 0},
//   {"a": 0, "b": 0, "c": 0, "d": 4} ]
 
// (There is no need to use JSON in your solutions -- the notation is just used to
// introduce and explain the problems.)
 
// Write a function minByColumn that takes a database table (as above), along with a
// column, and returns the row that contains the minimum value for the given column.
// If a row doesn't have any value for the column, your function should behave as
// though the value for that column was zero.
 
// In addition to writing this function, you should use tests to demonstrate that it's
// correct, either via an existing testing system or one you create.
 
// ## Examples
 
const table1 = [
  {"a": 1},
  {"a": 2},
  {"a": 3}
]
console.log(minByColumnEv(table1, "a")) // returns {"a": 1}
 
const table2 = [
  {"a": 1, "b": 2},
  {"a": 3, "b": 0}
]
console.log(minByColumnEv(table2, "b")) // returns {"a": 3, "b": 0}
 
// table3 = [
//   {"a": 1, "b": -2},
//   {"a": 3}
// ]
// minByColumn(table3, "b") returns {"a": 1, "b": -2}


// input: table, column 
// output: minimum value based on the column, if != return 0
// constraints: optimize, get it to work 
// edge cases: if its empty return 0

// quick roadmap: 
// iterate over the table -> for of loop 
// second parameter: confines to check out that particular column 
// if found, we return the minimum value

function minByColumn (table, col) {
  // obejct.entries to grab peritnent values from our table
  const result = undefined;
  // iterate over the array first then access the object within each index
  for(let i = 0; i < table.length; i += 1) {
    for(const [key, value] of Object.entries(table[i])) {
      let row = table[i];
      let column = row[col];
      for(let k = 0; k < column.length; k += 1) {
        console.log('in the second loop');
      }
      let nextElement = column + 1
      // perform comparision here
      console.log('current col:', table[i])
      console.log('next:', nextElement)
      if(row < table[i + 1]) {
         //console.log('here in the conditional statement')
        result = table[i];
      } else {
          // increment next 
        nextElement += 1;
      } 
    }
  }
  return result; 
}

function getValue(row, col) {
  const val = row[col]
  if (val === undefined) {
    return 0;
  }
  return val;
}

function minByColumnEv(table, col) {
  if (table.length === 0) {
    return {};
  }
  
  let minValue = table[0]
  
  for (let i = 1; i < table.length; i += 1) {
   if (getValue(table[i], col) < getValue(minValue, col)) {
     minValue = table[i]
   }
  }
  
  return minValue;
}