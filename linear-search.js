const numbers = [12, 45, 66, 22, 3, 7, 8, 10, 76, 33]


function linearSearch(array ,target) {
    
    for (let i = 0; i < array.length; i++){
        if (array[i] === target) {
            return i
        }
    }

    return -1

}


function check(array,length, target) {
    console.log(array ,length,target)
}
function binarySearch(array, target) {
    const sortedArray = array.sort(function (a, b) {
        return a - b;

    })


    if (sortedArray[Math.ceil(array.length / 2)] === target) {
        return Math.ceil(array.length / 2)
    }
    else {
       
    }

    

    console.log(sortedArray)
}

// const res = linearSearch(numbers, 7);
const bRes= binarySearch(numbers,88)
console.log(res)