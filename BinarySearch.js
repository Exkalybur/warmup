/*
Input: Sorted array
 const arr = [1,2,3,4,5,6,7,8]; 
 const target = 5;

 Output: Index of the target
 if no target found return null;
  
*/


const BinarySearch = (arr, target) => {
   const start = 0;
   const end = arr.length -1;
   
  return Search(arr, target, start, end);
}


const Search = (arr, target, start, end) => {
  const mid = start + Math.floor((start+end) / 2);
   if(start < end) {
     if(arr[mid] === target) {
       return mid;
     }
     if(target < arr[mid]) {
       return Search(arr, target, start, mid-1);
     }
     if(target > arr[mid]) {
       return Search(arr, target, mid+1, end);
     }
   }
   return null;
}


console.log(BinarySearch([1,2,3,4,5,6,7,8], 3));