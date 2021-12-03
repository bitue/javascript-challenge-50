const str = 'XeroX';

function getTheGapX(str) {
    // write your solution here;
    if (str[0] === 'X') {
        if (str[str.length - 1] == 'X') {
            return (str.length -1)
        }
        else {
            return 0
        }
    }
    else {
        return -1
    }

    
}

console.log(`Gap between the X's: ${getTheGapX(str)}`)
