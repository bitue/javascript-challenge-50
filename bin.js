const arr = [12, 54, 2, 7, 43, 21, 11, 10];
let start = 0;
let end = arr.length - 1;


const binarySearch = (arr, start, end , target) => {
   
    let mid = Math.floor((start + end) /2)
    if (arr[mid] === target) {
        return mid
    }
    if (arr[mid] > target) {
        end = mid - 1;
        return binarySearch( arr,start , end , target)
    }
    if (arr[mid] < target) {
        start = mid + 1;
        return binarySearch (arr , start , end , target)
    }
}

const res = binarySearch(arr, start, end, 11);
console.log(res)