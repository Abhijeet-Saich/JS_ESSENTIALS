// helps to reduce the code duplication


class Person_{
    greet(){
        console.log('xxxx')
    }
}
let mee = new Person_()
mee.greet()
console.log(typeof mee)

// INHERITENCE
class SuperHuman extends Person_{
    fly(){
        console.log('Flyingggg!!')
    }
}

let sup = new SuperHuman();
sup.fly();
sup.greet();
console.log(mee.fly); //undefined



//what happens under the hood when we create 
function Person(){}
Person.prototype.talk = function(){
    return "some text here!!"
}

let me = new Person();
console.log(me.talk())



// using this in constructor function
function Man(){
    this.greet = function(){
        console.log("Hello ji mitr");          //greet is a property not a method, because of 'this' keyword
    }
}

let ab = new Man();    //both object instaces will have 'greet' function as properties, (copied)
let cd = new Man();    



// another expample
function Aadmi(){
    this.age = 12;
}

let x = new Aadmi();
Aadmi.age = 40;
console.log(x.age)  // still 12

function Doggy(){
    this.age = 10;
}

let puppy = new Doggy()
/******************************************
The new keyword performs four steps:

Create an empty object:
let obj = {};

Set its internal prototype to Doggy.prototype
obj.__proto__ = Doggy.prototype;

Bind this to the new object and run the function:
Doggy.call(obj);  

Return the object.
******************************************/
console.log(puppy.age)  // 10
console.log('--->',Doggy.age)  //undef  //property assigned only when instantiating
console.log('--->',Doggy.prototype.age) //undef




// 3 way to create inheritence chain

const xx = {
    pick(){
        console.log('pikkk')
    }
}

const zz = {}

const yy = Object.create(xx);
yy.pick();

Object.setPrototypeOf(zz,xx);
zz.pick();






