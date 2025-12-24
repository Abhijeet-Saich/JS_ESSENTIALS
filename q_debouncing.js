// implementing debouncing and throttling

const { lazy } = require("react");


function throttle(delay, fn){

    let intervalId;                   
    clearInterval(intervalId);

    return function(...args){
        setInterval(() =>{
            fn(...args)  
        }, delay)        // runs the function after every delay
    }
}

function throttle2(delay, fn){
    let lastcall = 0;                  // uses closure concept

    return function(...args){
        let now = Date.now();
        if(now - lastcall < delay) return;

        lastcall = now;
        // return fn(...args);  ---> incorrenct why ???
        return fn.apply(this, args);    // correct production ready (doesn't break)  HINT --> "Arrow functions don’t get this at call time"
        // a method of any object which uses 'this' will break, we we pass in above function
    }
}


// this function returns a 'function' which takes arguments which can be supplied to function being debounced
function debouncing(delay, fn){

    let timeOutId;                   
    clearTimeout(timeOutId);        // clear any older setTimeout

    return function(...args){       // accumulate all the arguments
        let timeOutId = setTimeout(() => {
            fn(...args)
        }, delay)                   // runs the function only once after a certain delat, dlay is in mili seconds
    }
}


const delay = 2000;

function print(name, age){
    console.log(`My name is ${name} and my age is ${age}`);
}


let printAfterDelay = debouncing(delay, print);
let logContinuously = throttle(delay, print);

printAfterDelay('Abhijeet', 25);
logContinuously('Abhijeet', 25);

