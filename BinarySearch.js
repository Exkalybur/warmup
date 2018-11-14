/*
Input: Sorted array
 const arr = [1,2,3,4,5,6,7,8]; 
 const target = 5;

 Output: Index of the target
 if no target found return null;
  
*/

const BinarySearch = (arr, target) => {
  let start = -1;
  let end = arr.length;

  if (!target) {
    return null;
  }
  while (start + 1 < end) {
    const mid = start + Math.floor((end - start) / 2);
    if (arr[mid] === target) {
      return mid;
    }
    if (target < arr[mid]) {
      end = mid;
    }
    if (target > arr[mid]) {
      start = mid;
    }
  }
  return null;

  // invoke recursive function
};

/* ***** RECURSIVE WAY ******  */
// const Search = (arr, target, start, end) => {
//   let mid = start + Math.floor((end-start) / 2);
//    if(start < end) {
//      if(arr[mid] === target) {
//        return mid;
//      }
//      else if(target < arr[mid]) {
//        return Search(arr, target, start, mid);
//      }
//      else {
//        return Search(arr, target, mid, end);
//      }
//    }
//    return null;
// }

// console.log(BinarySearch([1,2,3,4,5,6,7,8], 2));
