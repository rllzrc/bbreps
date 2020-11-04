// * Practice Reps => { challenges }

// * Remove Dupes!
// create a funciton that takes a string and returns a new string with duplicates removed.

// * first attempt: using a Set ~~
// pro-tip: any prob asking for unique values, use a set since it does all that work for ya!
const removeDuplicates = str => {
  // take string, convert it into a an array, does the new array includes that string? no, push it into it
  // use data structure -> create a set
  const arr = str.split(' ');
  // create a set to keep track of elements
  // no dupes in a set, pass in the array
  const set = new Set(arr);
  // create a newString from Set, instead of Array.from use set then convert to a string with join
  const newString = [...set].join(' ');
  return newString; 
};


// * test cases!!
console.log(removeDuplicates('This is is a test test string')); // -> 'This is a test string'

// * Flatten Arrays!
// pro-tip: use recursion !! ~
// without using .flat(), create a function to flatten an array
const flatten = arr => {
  const output = arr.reduce((acc, item) => {
    // check if the item is a number or array
    if(Array.isArray(item)) {
      // concat and reduce it down by recursively calling on func bc eventually it will flatten itself out
      acc = acc.concat(flatten(item));
    } else {
      acc.push(item);
    }
    return acc;
  }, []);
  
  return output;
};

// * test cases!!
console.log(flatten([1,2,[3,4, [5,6,7], 8], 9,10])); // -> [1,2,3,4,5,6,7,8,9,10];