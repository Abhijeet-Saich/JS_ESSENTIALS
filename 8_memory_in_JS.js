// debugger    
// to use memory we reserve and free it (manually done in JS)
// in JS it is automatically done --> (automatic garbage collection)
// Primitive ---> STACK
// Non-Primitive  ---> HEAP
// Chrome dev-tool memory tab let us see every single thing stored in memory for our entire application


// here we are going to learn how garbage-collection works in JS ?

function Test(name){
    this.name = name;
}

// IMP "global-vars", are not garbage collected ---> can be used by any part of program
let globalTest = new Test('GlobalTest');
let globalString = "globalString";


{
    let innerTest = new Test('InnerTest');
    let innerString = 'innerString'
    // debugger    
    // debugger pauses the execution inbetween
    console.log(innerTest.name, innerString);   // IMP when i do 'innerTest' only, i can see tow Test instances in dev tools
}


// IMP ---> NON-primitives are garbage collected, but not primitives



let mappy = new Map();
let i = 0;

setInterval(() => {
    mappy.set(i, `Index ${i}`);
    i++;
},1000)


//What are weak maps, and hwo they can be used for garbage collection ?  HINT--> use object as keys