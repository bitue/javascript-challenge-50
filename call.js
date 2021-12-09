const myPersonal = {
    name: 'ashik',
    place: 'pabna',
    display: function (msg) {
        console.log(`${this.name} bari is ${this.place} ${msg}`)
    },
    aotherObject: {
        nn: 'mostan',
        pp: 'dhaka',
        dis: function (msg) {
          console.log(` ${msg}  and  ${this.nn} is my ${this.name}`)
        }
    }
}

const bitue = {
    name: '12',
    place: 'web developer',
    nn: 'bind',
    pp:'mohammadpur'
}

// function . bind ( classical inheritence )
myPersonal.display.call(bitue , 'wellcome');
myPersonal.display.apply(bitue, ['wellcome']);
const grettings = myPersonal.aotherObject.dis.bind(bitue, 'wellcome');
grettings()