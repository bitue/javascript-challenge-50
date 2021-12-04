class Stack {
    constructor() {
        this.stack =[]
    }
    add(element) {
        this.stack.push(element)
    }
    remove() {
        if (this.stack.length >= 1) {
            return this.stack.pop()
        }
        else {
            return undefined
        }

    }
}


const myChoiceList = new Stack();

myChoiceList.add('abdul');
myChoiceList.add('kabul');
myChoiceList.add('babul');
const li = myChoiceList.remove();
console.log(li)

const lii = myChoiceList.remove();
console.log(lii)

const liii = myChoiceList.remove();
console.log(liii)

const liiii = myChoiceList.remove();
console.log(liiii);
const liiiii = myChoiceList.remove();
console.log(liiiii)

console.log(myChoiceList.stack)