// 


console.log(this);
console.log(global);


function talk(){
    console.log(this);
}

let me = {
    name : 'Abhijeet',
    talk
}


me.talk()   // part of me object
talk()      // part of global object    **Strict mode doesn't allow 'this' to refer GLOBAL or WINDOW object



// this promotes reusability

function greet(){
    console.log(`Hi ${this.name}`);
}

let i = { name : 'Mario', greet }
let u = { name : 'Juilet', greet }

i.greet();  // this refers to place from where its called
u.greet();  // can be used by any object i;e CONTEXTUAL



// we can't always add function to object, but we can always attact an object to a function using '.bind(obj)' method
// all functions have .bind method, returns a new function
console.log(Function.prototype.bind) 

let iTalk = greet.bind(i);
iTalk();

greet.call(u)  // executes the function instead of returning it ---> func.call(obj, farg1, farg2) || func.apply(obj , [farg1 , farg2])





// 'this' inside CONSTRUCTOR function
// the NEW keyword creates binding with the new object being constructed

function Bag(n){
    this.x = n;
    this.brand = function(){
        console.log(this)
    }
    console.log(n)
    setTimeout(function(){          // callbacks have entirely different context
        console.log('axe',this)    //part here is not inside context of constructor function
    }, 100)
}

let q = new Bag("Louis Vitton");
console.log(q);
console.log(q.brand());




