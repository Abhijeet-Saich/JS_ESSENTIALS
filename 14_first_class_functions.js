// BEING FIRST CLASS

// funcs can be assigned to variables  ---> REUSABILITY | READIBILITY
const a = function(){
    console.log(Date.now());
}
a();
setInterval(a, 1000);  // passed as callback easier to handle



// funcs can be returned from other funcs
// factory pattern
// funcs can be curried ---> partial execution
// Currying is when you break down a function that takes multiple arguments into a series of functions that each take only one argument.
function printMoney(sign, amount){
    return `${sign} ${amount}`;
}
// repetition
console.log(printMoney('$', 100));
console.log(printMoney('&', 300));
console.log(printMoney('%', 300));

// reducing function to 1 arguments
function moneyFactory(sign){
    return function(amount){
        return `${sign} ${amount}`;
    }
}
// specialized function
let printDollar = moneyFactory('$');
console.log(printDollar(1000));

let printHash = moneyFactory('#');
console.log(printHash(1000));



// funcs can be stored inside data-structures
// function can be anonymous
const operations = {
    add : (a, b) => a + b,
    sub : (a, b) => a - b
}







