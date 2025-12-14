// IMP !! every object in js is an instance of 'Object' object capital O
// every new object create using {}, new Object(), Object.create() gets property "__proto__", which points to  ---> the 'Object'
// when we access any property in an object, and it can't find, we look in its prototye, if not present then its prototype
// till we reach "the Object", if also nor present 'undefined' is returned

const dude = {};

dude.age = 20;
dude.name = 'abhijeet';

console.log(dude.toString);
console.log(dude.valueOf);



const  myBrothers = ['x', 'y'];
console.log(myBrothers.__proto__);
let neem = 'tree';
console.log(neem.__proto__);
console.log(myBrothers.__proto__);


let human = {
    kind : "human"
};

let sina = Object.create(human);
sina.height = '6feet';
sina.age = '42'

//check 
console.log(sina.__proto__)

let sinaKaBeta = Object.create(sina);
sinaKaBeta.height = '6.5feet';
sina.age = 100

//check
console.log(sinaKaBeta.age)
sina.age = 22
console.log(sinaKaBeta.age)
sinaKaBeta.age = 1000
console.log(sinaKaBeta.age)




// What is "prototype" ?
// property on constructor function which contains all the stuff which will be inherited by its instance
// __proto__ property of every variable, pointing to object it is inherting properties from
function Classer(arg){
    this.name = arg
}

const i = new Classer('Abhijeet');
console.log(i.prototype)
console.log(Classer.prototype)

console.log(i.__proto__ === Classer.prototype);
