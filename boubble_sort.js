const arr = [12, 43, 1, 2, 54, 78, 67, 32, 122];
// const boubbleSort = (arr) => {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i+1 ; j < arr.length ; j++) {
//             console.log(arr[i] , arr[j], ` at the time of ${i} and ${j}`)
//         }
//     }
// }

const boubbleSort = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        let flag = true;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                [arr[i], arr[j]] = [arr[j], arr[i]];
                flag = false;
            }
        }
        if (flag) {
            return arr
        }
    }
    return arr;
}
const res = boubbleSort(arr);
console.log(res)