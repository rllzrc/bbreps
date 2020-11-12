// Given an Array of ids and parentids. Create an array that contains top level parents with nested children.

let arr = [
  {'id':1 ,'parentid' : 0},
  {'id':4 ,'parentid' : 2},
  {'id':3 ,'parentid' : 1},
  {'id':5 ,'parentid' : 0},
  {'id':6 ,'parentid' : 0},
  {'id':2 ,'parentid' : 1},
  {'id':7 ,'parentid' : 4},
  {'id':8 ,'parentid' : 1},
  {'id':9 ,'parentid' : 6}
];

// Create an array that contains top level parents with nested children. Output should look like this:
// [
//     {
//         "id": 1,
//         "parentid": 0,
//         "children": [
//             {
//                 "id": 2,
//                 "parentid": 1,
//                 "children": [
//                     {
//                         "id": 4,
//                         "parentid": 2,
//                         "children": [
//                             {
//                                 "id": 7,
//                                 "parentid": 4,
//                                 "children": []
//                             }
//                         ]
//                     }
//                 ]
//             },
//             {
//                 "id": 3,
//                 "parentid": 1,
//                 "children": []
//             },
//             {
//                 "id": 8,
//                 "parentid": 1,
//                 "children": []
//             }
//         ]
//     },
//     {
//         "id": 5,
//         "parentid": 0,
//         "children": []
//     },
//     {
//         "id": 6,
//         "parentid": 0,
//         "children": [
//             {
//                 "id": 9,
//                 "parentid": 6,
//                 "children": []
//             }
//         ]
//     }
// ]

/// {id : 1, parentId: 0, children: []


// const nest = (items, parent = 0) => {
//   const nested = [];

//   Object.values(items).forEach(item => {
//     // parent can be a string or a number
//     /* eslint-disable-next-line eqeqeq */
//     if (item.parent == parent) {
//       const children = nest(items, item.id);

//       if (children.length) {
//         /* eslint-disable-next-line no-param-reassign */
//         item.children = children;
//       }

//       nested.push(item);
//     }
//   });

//   return nested;
// };

const flatten = (arr, parentid = 0) => {
  // create output variable to return out later
  const output = [];
  // loop through input arr grab pertinent values
  for(let i in arr) {
    //console.log(arr[i].parentid);
    // if parentid is the same, run flatten again on current element and save its evaluated result in children
    if(arr[i].parentid === parentid) {
      //console.log('in the if');
      const children = flatten(arr, arr[i].id);
      // add children to array
      if(children.length) {
        arr[i].children = children;
      }
      output.push(arr[i]);
    }
  }
  return output;
};

// * brute force attempt
// const flatten1 = arr => {
//   // create a variable to store output val in
//   const output = [];
//   // goal is just to flatten out the input array into these values:
//   /// [ {id : 1, parentId: 0, children: []} ]
//   // loop through array
//   for(let el of arr) {
//     const topLevel = { parentid: 0, id: 0, children: [], }
//     //console.log(el.parentid);
//     //console.log(el.id);
//     topLevel.parentid = el.parentid;
//     topLevel.id = el.id;
//     // use BFS to then build out the children array  

//     output.push(topLevel);
//   }
//   return output;
// }

// // * create a helper BFS function
// const bfs = arr => {
//   // edge case:
//   if(!arr || arr.length === 0) return;
//   // create a queue
//   const queue = [arr];
//   // iterate through while queue has nodes in it
//   while(queue.length > 0) {
//     // grab first item in queue
//     const current = queue.shift();
//     // push its children values into the array
//     arr.push(current.id);
//     // check if current has any children values
//     for(const child of current.children) {
//       queue.push(child);
//     }
//   }
//   return arr; 
// };

// * test cases!!!
console.log(flatten(arr)); // -> 