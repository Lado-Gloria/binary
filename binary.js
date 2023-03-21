

function mergeSort(array) {
    if (array.length <= 1) {
      return array;
    }
    
    let middle = Math.floor(array.length / 2);
    let left = array.slice(0, middle);
    const right = array.slice(middle);
  
    return merge(mergeSort(left), mergeSort(right));
  }
  
  function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;
  
    while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] < right[rightIndex]) {
        result.push(left[leftIndex]);
        leftIndex++;
      } else {
        result.push(right[rightIndex]);
        rightIndex++;
      }
    }
  
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}
  
  const num = [45, 12, 6, 89, 2, 5];
  const sortedNum = mergeSort(num);
  console.log(sortedNum)
  
  function binarySearch(array, target) {
    let leftIndex = 0;
    let rightIndex = array.length - 1;
    console.log("left1",leftIndex)
    console.log("right1",rightIndex)
  
    while (leftIndex <= rightIndex) {
      console.log("left2",leftIndex)
      console.log("right2",rightIndex)
      const midIndex = Math.floor((leftIndex + rightIndex) / 2);
      if (array[midIndex] === target) {
        return midIndex;
      } else if (array[midIndex] < target) {
        leftIndex = midIndex + 1;
      } else {
        rightIndex = midIndex - 1;
      }
    }
  
    return null;
  }
  
  const target = 6;
  const targetIndex = binarySearch(sortedNum, target);
  console.log(targetIndex);

  
function mergeSort1(arr1) {
  if (arr1.length <= 1) {
    return arr1;
  }
  
  const mid1 = Math.floor(arr1.length / 2);
  const left1 = arr1.slice(0, mid1);
  const right1 = arr1.slice(mid1);

  return merge1(mergeSort1(left1), mergeSort1(right1));
}

function merge1(left1, right1) {
  let result1 = [];
  let leftIndex1 = 0;
  let rightIndex1 = 0;

  while (leftIndex1 < left1.length && rightIndex1 < right1.length) {
    if (left1[leftIndex1] >= right1[rightIndex1]) {
      result1.push(left1[leftIndex1]);
      leftIndex1++;
    } else {
      result1.push(right1[rightIndex1]);
      rightIndex1++;
    }
  }

  return result1.concat(left1.slice(leftIndex1)).
  concat(right1.slice(rightIndex1));
}

const arr1 = [123, 89, 5, 23, 9, 56];
const sortedArr1 = mergeSort1(arr1);

console.log(sortedArr1); 



function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const mid = Math.floor(arr.length / 2);
  const leftArr = arr.slice(0, mid);
  const rightArr = arr.slice(mid);

  return merge(mergeSort(leftArr), mergeSort(rightArr));
}

function merge(leftArr, rightArr) {
  let result = [];

  while (leftArr.length && rightArr.length) {
    if (leftArr[0] < rightArr[0]) {
      result.push(leftArr.shift());
    } else {
      result.push(rightArr.shift());
    }
  }

  return result.concat(leftArr, rightArr);
}

function binarySearch(arr, tart) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);

    if (arr[mid] === tart) {
      return mid;
    } else if (arr[mid] < tart) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return -1;
}
let tart = 34;
let arr2 = [1, 4, 78, 2, 67, 3];

const sortArr = mergeSort(arr2);
const index = binarySearch(sortArr, tart);

if (index === -1) {
  console.log(`Target ${tart} not found`);
} else {
  // console.log(`Target ${tart} found at index ${index}`);
}