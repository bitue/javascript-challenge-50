class Dictionary {
    constructor() {
        this.dictionary ={}
    }

    add(key, value) {
        this.dictionary[key] = value;
    }

    get(key) {
       return this.dictionary[key]
    }
}



const studentList = new Dictionary();
studentList.add(1, 'biplob');
studentList.add(2, 'sunny');
studentList.add(3, 'kabir');

const nameOfStudent = studentList.get(3);
console.log(nameOfStudent)

console.log(studentList.dictionary)