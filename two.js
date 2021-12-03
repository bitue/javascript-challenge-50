const str = "JavaScript is awesome"

function reverseAString(str) {
    // write your solution here
    let rev = ''
    for (let i = str.length-1; i >= 0; i--){
        rev += str[i]
    }

    return rev
}

const res = reverseAString(str);
console.log(res)
