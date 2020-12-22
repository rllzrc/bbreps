// 

// A word machine is a system that performs a sequence of simple operations on a stack of integers. Initially the stack is empty. The sequence of operations is given as a string. Operations are separated by single spaces. The following operations may be specified: 

// an integer X (from 0 to 2^20 - 1): the machine pushes X onto the stack. 
// POP: the machine removes the top most number from the stack
// DUP: the machine pushes a duplicate of the top most number onto the stack 
// + : the machine pops the two top most elements from the stack, add them together and pushes the sum onto the stack.
// - : the machine pops the two topmost elements from the stack, subtracts the second one from the first (topmost) one and pushes the difference onto the stack.

// After processing all operations, the machine returns the topmost value from the stack. 

// The machine processes 20-bit unsigned integers. An overflow in addition or underflow in subtraction causes an error. The machine also reports an error when it tries to perform an operation that expects more numbers on the stack than the stack actually contains. Also, if after performing all operations, the stack is empty, the machine reports an error. 

// for example, 

const s1 = "4 5 6 - 7 +"
const s2 = '13 DUP 4 POP 5 DUP + DUP + -'
const s3 = '5 6 + -'
const s4 = '3 DUP 5 - -'
const s5 = "2 2 -"

// * first attempt at solution:
const solution1 = S => {
  // create a stack data structure
  const stack = [];
  // split input S --> split converts string into an array that separates characters 
  let input = S.split(' ');
  console.log('input:', input);
  // iterate through input array and perform specific functionality pertaining to current element's property / type
  for(let i = 0; i < input.length; i += 1) {
    // create a variable to store current element in 
    let current = input[i];
    // check if current element is a number
    if(Number(current)) {
      // use Number function to convert the element to a number 
    }
  }
}

function solution(S) {
  let input = S.split(' ');
  let stack = [];
  for (let x = 0; x < input.length; x++) {
    let e = input[x];
    console.log(e)
    if (Number(e)) {
      stack.push(Number(e));
    } else if (e === 'POP') {
      if (!stack.length) return -1;
      stack.pop();
    } else if (e === 'DUP') {
      if (!stack.length) return -1;    
      stack.push(stack[stack.length-1]);
    } else if (e === '+') {
      if (stack.length < 2) return -1;       
      let newNum = stack.pop() + stack.pop();
      if (newNum > Math.pow(2,20)-1) return -1;         
      stack.push(newNum);
    } else if (e === '-') {
      if (stack.length < 2) return -1;      
      let newNum = stack.pop() - stack.pop();
      if (newNum < 0) return -1;        
      stack.push(newNum);   
    }
}
  if (!stack.length) return -1;
  console.log(stack)
  return stack[stack.length-1];
}

solution1(s1);
console.log(solution(s1)); // -> 8