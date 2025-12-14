// the function which return functions or take them as parameter 
// closures remembers the outer function scope even after creation time

function human(name){
    function sayHi(){
        console.log(`Hi there ${name}`);
    }
    function sayFU(){
        console.log(`FU ${name}`);
    }

    return {
        sayHi,
        sayFU
    }
}

let h1 = human('Abhi');
let h2 = human('Pikaa');

h1.sayHi();     // still remembers the value of 'name', from scope of outer variable when it was called 