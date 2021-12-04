const numbers = [2,5,7,9,33,56,89,93]




function binarySearch(numbers, target) {
    let start = 0;
    let end = numbers.length - 1;
    console.log(start,end)

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        if (numbers[mid] === target) {
            return mid 
        }
        if (numbers[mid] > target) {
            end = mid -1
            console.log(start ,mid ,end , numbers[mid])
        }

        if (numbers[mid] < target) {
            start = mid +1
            console.log(start ,mid ,end , numbers[mid])
        }
    }

    return -1
}


const res = binarySearch(numbers, 193);
console.log(res)

















