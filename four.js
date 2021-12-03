const time = '11:38PM';

const fulFill = (time) => {
    if (time.length < 7) {
        const timeArr = time.split('');
        timeArr.unshift('0')
        const newTime = timeArr.join('');
        return newTime
    }
    return time
}


const full = (time) => {
    const arr = time.split(':');
    console.log(arr,'first')
    if (arr[0].length < 2) {
        const timeArr = arr[0].split('');
        console.log(timeArr,'first-part')
        timeArr.unshift('0')
        console.log(timeArr)
        const newTime = timeArr.join('');
        console.log(newTime, 'from if')
        if (arr[1].length <4) {
            const strArr = arr[1].split('');
            strArr.unshift('0');
            const final = strArr.join('');
            console.log(final);
            return 
        }
        return newTime
        
    }
    
    
}
full('1:8AM')

function convertTo24HrsFormat(time) {
    const newTime = fulFill(time);
    console.log(newTime)
    const dec = newTime[newTime.length - 2]  // A or P 
    const splitArray = newTime.split(dec)[0]; // split that and get the array[0]
    console.log(splitArray)
    if (dec === "A") {
        const priroty = splitArray.split(':')[0]
        const optional = splitArray.split(':')[1]
        console.log(priroty)
        if (parseInt(priroty) < 12) {
            return splitArray
        }
        else {
            const first = '00:';
            total = first + optional;
            return total
        }
        console.log(priroty)
    }
    else {
        const priroty = splitArray.split(':')[0]
        const optional = splitArray.split(':')[1]
        if (parseInt(priroty) == '12') {
            return priroty + ':' + optional
        }
        else {
            let num = parseInt(priroty) + 12;
            num = num + '';
            const total = num + ':' + optional;
            return total
        }
        
    }
 

    return
}

console.log(`Converted time: ${convertTo24HrsFormat(time)}`)