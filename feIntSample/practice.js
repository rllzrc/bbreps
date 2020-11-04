// * Practice Reps => { challenges }

const { SSL_OP_EPHEMERAL_RSA } = require("constants");

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

// * Implementing * B I N D *
// implement function.protoype.bind()

const foo = function() {
  console.log(this.bar);
}

let baz = foo.bind({bar: 'hello'})

baz(); // hello
// take in an argument which will be the new context we'll pass in
// return a function that will be invoked later -> return a function with a different context -- use .call() or .apply()
Function.prototype.bind = function(context) {
  // this is the function itself
  const fn = this;
  // an anonymous function
  return function() {
    fn.call(context);
  }
};

// if not a prototype and just need to implement bind:
function bind(fn, contenxt) {
  return function() {
    fn.call(context);
  }
};

// how to deal with arguments? 
function bind1(fn, context) {
  return function(){
    fn.apply(context, [...arguments]);
  }
};

// * Timing in JS -- Implement D E B O U N C E ~~
// setInterval() or setTimeout()
// implement debounce
// debouncedFn();
fn = debounce(fn, time);

function debounce(fn, time) {
  // to capture id of event when user is still typing
  let setTimeoutId;

  return function() {
    // we have a reference of something still running
    if(setTimeoutId) {
      clearTimeout(setTimeoutId); 
    }

    setTimeOutId = setTimeout(() => {
      fn.apply(this, arguments);
      // get rid of the ID
      setTimeoutId = null; 
    }, time);
  }
}

// alternatively, here is what throttle will look like:
// I want to execute the first one but don't want to execute anything else that comes after it until time has expired
function throttle(fn, time) {
  let setTimeoutId;
  
  return function() {
    if(setTimeoutId) {
      return;
    }

    setTimeoutId = setTimeout(() => {
      fn.apply(this, arguments);
      setTimeoutId = null;
    }, time);
  }
};

// * T R E E S ~~
// We have two indentical DOM trees, A and B. For DOM tree A, we have the location of an element. Create a function to find that same element in tree B.

// iterate up until you hit the root node
// then jump back down

function reversePath(element, root) {
  // walk back up to the root and record the path
  const path = [];
  // create a variable to check where you're at
  let pointer = element;
  // iterate and stop once you get to the root
  while(pointer.parent){
    const index = pointer.parent.children.indexOf(pointer);
    path.push(index);
    // move the pointer since we want to know where the parent is within this array
    pointer = pointer.parent;
  } 

  pointer = root;
  // while there are paths in the array, keep iterating down the tree
  while(path.length) {
    pointer = children[path.pop()];
  } 
};

// * MOVING ELEMENTS / R E N D E R I N G
// Create a function to move an element. The function arguments are distance, duration, and element to move.

// not returning anything, just updating the DOM
function moveElement(duration, distance, element) {
  const start = performance.now();

  function move(currentTime) {
    const elapsed = currentTime - start;
    // ratio of how much time has elapsed
    const progress = elapsed / duration;
    const amountToMove = progress * distance;
    element.style.transform = `translateX(${ amountToMove }px)`;

    if(amountToMove < distance) {
      requestAnimationFrame(move);
    }
  }
  // the call back
  requestAnimationFrame(move);
};

// * PROMISES ~~
// create a sleep function that takes on parameter (time) and will wait "time" ms

// async function run() {
//   await sleep(500);
//   console.log('hello');
//   await sleep(500);
//   console.log('world');
// }

function sleep(time) {
  // async method use a promise
  // takes an executer - resolve + reject
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, time)
  });
}

// promise-fy function - so you can use .then, .then, etc...
function promisify(fn) {
  return function(...args) {
    return new Promise(function(resolve, reject) {
      function cb(result) {
        resolve(result);
      }

      // calls the cb once the function resolves
      fn.apply(this, args.concat(cb));
    });
  }
};