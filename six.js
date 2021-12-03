const str = "Codedamn is the best place to learn to code"
const wordLimit = 5;
let result =''

function truncateWithWordLimit(str, wordLimit) {
    const strArray = str.split(' ');
    for (let i = 0; i < wordLimit; i++) {
        result = result + ' ' + strArray[i]
    }


    return result
}

console.log(`Truncated string: ${truncateWithWordLimit(str, wordLimit)}`)