function findFirstDuplicate(arr) {
  // 1. go through each num in array and 
  // see if the num is like the num after 
  // will need to do for loop 
  // also an if conditional 
  //2. Input: [2, 1, 3, 3, 2]
   //  Output: 3
   // 3. for (let i = 0, i < arr.length, i ++){
     // if ()

     const mySet = new Set()
     for (let i = 0; i < arr.length; i ++){
       if (mySet.has(arr[i]))
        return arr[i];
        mySet.add(arr[i]);  
     }
     return -1 
  
   }


if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 3");
  console.log("=>", findFirstDuplicate([2, 1, 3, 3, 2]));

  console.log("");

  console.log("Expecting: -1");
  console.log("=>", findFirstDuplicate([1, 2, 3, 4]));
}

module.exports = findFirstDuplicate;

// Please add your pseudocode to this file
// And a written explanation of your solution
