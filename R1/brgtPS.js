//const _ = require('lodash')
//const assert = require('assert');
const sourceArr = [42, 3, 56, 100, 78];
let result;
let expected;

/* 
  Array::map 
  Increment by 1
*/

/*
  Question 1:
  Without using the built-in Array::map, create your own map function
  called myMap that takes in an array and a callback
*/

const myMap = (arr, cb) => {
  // implement here!
  const output = [];
  // iterate array
  for(let i = 0; i < arr.length; i += 1) {
    output.push(cb(arr[i]));
  }
  return output;
};

/*
  Question 2:
  Given an array of numbers, use your `myMap` to return a new array where
  each element is incremented by 1
*/

const incrementByOne = arr => {
  return myMap(arr, (el => {
    return el += 1;
  }));
};

// * !<<---- ! myMap & incrementByOne result ---->> 
// uncomment the next three lines to test
result = incrementByOne(sourceArr);
console.log('test 1 result:', result);
expected = [43, 4, 57, 101, 79];
console.log('expected answer:', expected);

// don't uncomment this one below
// assert(_.isEqual(expected, result));

/*
  Array::filter
  Find elements greater than 50
*/

/*
  Question 3:
  Without using the built-in Array::filter, create your own filter function
  called myFilter that takes in an array and a callback
*/

// * myFilter first attempt
// const myFilter1 = (arr, cb) => {
//   const output = [];
//   for(let i = 0; i < arr.length; i += 1) {
//     // check for truthy/falsy value
//     if(cb(arr[i])) {
//       output.push(arr[i]);
//     };
//   }
//   return output;
// }

// * myFilter refactored:
const myFilter = (arr, cb) => {
  const output = [];
  arr.forEach(el => {
    if(cb(el)) {
      output.push(el);
    }
  });
  return output;
};

/*
  Question 4:
  Given an array of numbers, use your `myFilter` to return a new array containing
  only elements that are greater than 50
*/


const filterGreaterThan50 = arr => {
  return myFilter(arr, (el => {
    return el > 50;
  }))
};


// * !<<---- ! myFilter & filterGreaterThan50 result ---->> 
// uncomment the next three lines to test
result = filterGreaterThan50(sourceArr);
console.log('test 2 result:', result);
expected = [56, 100, 78];
console.log('expected answer:', expected);

// don't uncomment this one below
// assert(_.isEqual(expected, result));

/*
  Array::reduce
  Sum of elements
*/

/*
  Question 5:
  Without using the built-in Array::reduce, create your own reduce function
  called myReduce that takes in an array, an accumulator function, and 
  an initial value
*/

// * first attempt at myReduce 
// const myReduce = (arr, cb, initialValue) => {
//   // implement here!
//   // create a variable to store return value 
//   let acc;
//   // edge case check
//   if(initialValue === undefined) {
//     initialValue = arr[0];
//     // remove first element so no dupes later
//     arr.shift();
//   }
//   acc = initialValue; 
//   // iterate and run cb func result to be acc
//   // for(let i = 0; i < arr.length; i += 1) {
//   //   acc = accumFunc(acc, arr[i], i, arr)
//   // }
//   arr.forEach((el, i) => {
//     acc = cb(acc, el, i, arr);
//   });
//   return acc;
// }

// * myReduce with forEach
// const myReduce = (arr, reducer, initialValue) => {
//   // implement here!
//   let acc;
//   acc = initialValue === undefined ? initialValue = arr[0] : acc = initialValue;
  
//   if(initialValue === arr[0]) arr.shift();

//   arr.forEach((el, i) => {
//     acc = reducer(acc, el, i, arr);
//   });
//   return acc;
// };

const myReduce = (arr, reducer, initialValue) => {
  let index = 0;
  let acc = initialValue ? initialValue : arr[0];
  if(acc === arr[0]) index = 1;

  for(let i = index; i < arr.length; i += 1) {
    acc = reducer(acc, arr[i], i, arr);
  };
  return acc;
};

/*
  Question 6:
  Given an array of numbers, use your `myReduce` to return the sum of
  all the elements in the source array
*/


// * first attempt at sum elements
// const sumElements = (arr) => {
//   // implement here!
//   let sum = myReduce(arr, function(acc, el, i, arr) {
//     //console.log(el)
//     return acc += el
//   });
//   //console.log(sum)
//   return sum;
// }

// * refactored version of sumElements!!
const sumElements = arr => {
  return myReduce(arr, (acc, el, i, arr) => {
    return acc += el;
  });
};


// * !<<---- ! myReduce & sumElements result ---->> 
// uncomment the next three lines to test
result = sumElements(sourceArr);
console.log('test 3 result:', result);
expected = 279;
console.log('expected answer:', expected);

// don't uncomment this one below
// assert(_.isEqual(expected, result));

/*
  myMapV2 without a for loop
  Increment by 1
*/

/*
  Question 7:
  Without using a for loop, come up with a different implementation
  for myMap called myMapV2 (hint: can you reuse one of your other functions
  that you just defined?)
*/
  

const myMapV2 = (arr, cb) => {
  const output = [];
  myReduce(arr, function(acc, el, i, arr) {
    output.push(cb(el));
  }, output);
  return output;
};

/*
  Question 8:
  Given an array of numbers, use your `myMapV2` to return a new array where
  each element is incremented by 1
*/

  
const incrementByOneV2 = arr => {
  // implement here!
  return myMapV2(arr, function(el) {
    return el + 1;
  });
};

// const incrementByOneV2 = (arr) => {
//   // implement here!
//   console.log(arr);
//   const plusOne = myMap(arr, function(el) {
//     return el + 1;
//   });
//   console.log(plusOne);
//   return plusOne;
// }

// * !<<---- ! myMapV2 & incrementByOneV2 result ---->> 
// uncomment the next three lines to test
result = incrementByOneV2(sourceArr);
console.log('test 4 result:', result);
// expected = [4, 57, 101, 79];
expected = [43, 4, 57, 101, 79];
console.log('expected answer:', expected);

// don't uncomment this one below
// assert(_.isEqual(expected, result));