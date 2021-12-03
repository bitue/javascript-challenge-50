const num = 3849;

function reverseGivenInteger(num) {
    const str = num + '';
    let revNum = ''
    for (let i = str.length - 1; i >= 0; i--){
        revNum = revNum + str[i]
    }
    const revNumRes = parseInt(revNum);
    console.log(typeof revNumRes)

    return revNum
}

console.log(`Reversed integer is: ${reverseGivenInteger(num)}`)