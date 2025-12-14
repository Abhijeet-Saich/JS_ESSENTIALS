
// Difference between Arrow and Regular function

//  'arguments' object
let log = function(){
    console.log(arguments,typeof arguments)
}

let log_2 = () =>{
    console.log(arguments)
}

log('a', 'b', true, 10);
log_2('a', 'b', true, 10);


// In Node.js, every file is wrapped inside a function before execution:

// (function (exports, require, module, __filename, __dirname) {
//     // 👉 your code here
// });

// This is called the CommonJS wrapper function.
// Arrow functions don’t have their own arguments. So they inherit arguments from the outer function.
// Arrow functions can't be used as constructor functions


// callback functions are passed as arguments to other funcs. AKA higher-order functions 

const you = {
    talk : () => {
        console.log('Hello')
    }
}

you.talk();


// !!IMPORTANT
let exp = {
    name : 'Abhijeet',
    talk : function(){
        console.log(this)   // functs binds themself to objects
    },
    secret : this,
    arrowTalk : () => {
        console.log(this)
    }
}

exp.talk()          // regular function invoked by object automatically binds itself with that object
exp.arrowTalk()     // binding doesn't happen
console.log(exp.secret)


// We should not use arrow funcs as object methods
// as 'this' doesn't refer to object itself 
// arrow functions use value of 'this' from the lexical scope where it was created


// 'addEventListener' has ability to bind the regular callback function to dom element it is attached to 

function outer(inner){
    inner()
}

function outerCall(inner,obj){
    inner.call(obj)
}


function inner(){
    console.log('--->',this) 
}


outer(inner);   // logs globals object, function is not binded to any other object
outerCall(inner,{ name : 'Abhijeet'})  // binded this object


