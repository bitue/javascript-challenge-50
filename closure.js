const limit = 100;
const isPrime = [2];
const isNotPrime = [];


for (let i = 3; i < limit; i++) {
    let flag = true; 
    for (let j = 2; j < i; j++) {
        if (i % j === 0) {
            flag = false;
            isNotPrime.push(i)
        }
    }
    if (flag) {
        isPrime.push(i)
    } 
}

console.dir(isPrime )