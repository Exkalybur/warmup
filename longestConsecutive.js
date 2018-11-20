/*

Given an (2)unsorted/(1)sorted array of integers, find the length of the longest consecutive elements sequence.

Your algorithm should run in O(n) complexity.

Example:

Input: [100, 4, 200, 1, 3, 2]
Output: 4
Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.

*/
// (1)
// input is already sorted Array
const findLongestCons = arr => {
  let arrList = [];
  let tempArr = [];
  let lastNum = arr[0];
  tempArr.push(lastNum);
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] - 1 === lastNum) {
      tempArr.push(arr[i]);
      lastNum = arr[i];
    } else {
      arrList.push(tempArr);
      tempArr = [];
      lastNum = arr[i];
      tempArr.push(lastNum);
    }
  }
  arrList.push(tempArr);
  let maxLength = 0;

  for (let j = 0; j < arrList.length; j++) {
    if (arrList[j].length > maxLength) {
      maxLength = arrList[j].length;
    }
  }

  return maxLength;
};

// console.log(findLongestCons([10,15,1,2,3,4,5,11,12]));

// (2)
// input is unsorted Array
const longestConsecutive = function(nums) {
  if (!nums.length) {
    return 0;
  }
  let sortedArr = new Set(nums.sort((a, b) => a - b));
  let sorted = [...sortedArr];
  let arrList = [];
  let tempArr = [];
  let lastNum = sorted[0];
  tempArr.push(lastNum);

  for (let i = 1; i < sorted.length; i++) {
    if (sorted[i] - 1 === lastNum) {
      tempArr.push(sorted[i]);
      lastNum = sorted[i];
    } else {
      arrList.push(tempArr);
      tempArr = [];
      lastNum = sorted[i];
      tempArr.push(lastNum);
    }
  }

  arrList.push(tempArr);
  let maxLength = 0;

  for (let j = 0; j < arrList.length; j++) {
    let temp = arrList[j];

    if (temp.length > maxLength) {
      maxLength = temp.length;
    }
  }

  return maxLength;
};

// console.log(longestConsecutive([100,4,200,1,3,2]));
