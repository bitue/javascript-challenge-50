const time = '1:18AM'

const full = (time) => {
    const stringPart = time.slice(time.length - 2);
    const digitPart = time.slice(0,time.length-2)
    // console.log(digitPart, stringPart)
    

   

    const makeDigitArray = digitPart.split(':');
    if (makeDigitArray[0].length < 2) {
        const firstTwoDigitArray = makeDigitArray[0].split('');
        firstTwoDigitArray.unshift('0');
        var firstTwoDigit = firstTwoDigitArray.join('')
        // console.log(firstTwoDigit)
    }
    else {
        firstTwoDigit = makeDigitArray[0]
    }
    if (makeDigitArray[1].length < 2) {
        const secondTwoDigitArray = makeDigitArray[1].split('');
        secondTwoDigitArray.unshift('0');
        var secondTwoDigit = secondTwoDigitArray.join('')
        // console.log(secondTwoDigit)
    }
    else {
        secondTwoDigit = makeDigitArray[1]
    }

    return {
        firstTwoDigit , secondTwoDigit , stringPart
    }

    
}






const mainFunction = (time) => {
    const { firstTwoDigit, secondTwoDigit, stringPart } = full(time);
    console.log(firstTwoDigit, secondTwoDigit, stringPart);

    if (stringPart === 'PM') {
        if (parseInt(firstTwoDigit) < 12) {
            const firstTwoNum = parseInt(firstTwoDigit) + 12 + ''
            let originalTime = firstTwoNum + ':' + secondTwoDigit;
            return originalTime
        }
        else  {
            let originalTime = firstTwoDigit + ':' + secondTwoDigit;
            return originalTime
        }
    }
    else {
        if (parseInt(firstTwoDigit) < 12) {
            let originalTime = firstTwoDigit + ':' + secondTwoDigit;
            return originalTime
        }
        else {
            let originalTime = "00" + ':' + secondTwoDigit;
            return originalTime
        }
        
    }
}

mainFunction(time)



