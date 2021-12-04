class Quene {
    constructor() {
        this.que = [];

    }

    add(ele) {
        this.que.push(ele)
    }
    remove() {
       return  this.que.shift()
    }
}


const line = new Quene();


line.add('abul');
line.add('babul');
line.add('dabul');
line.remove();


console.log(line.que)