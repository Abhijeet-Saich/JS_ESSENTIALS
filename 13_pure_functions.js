// pure functions
// same 'output' for 'same' input ALWAYS
// NO SIDE EFFECTS --> doesn't change VAR or STATE outside its scope

let name = 'Abhijeet';

function printName(){
    return `Hello ${name}`;    // relies on outside environment
}
console.log(printName());


function printName2(name){
    return `Hello ${name}`;    // same output for every input
}
console.log(printName2('Pappu'));

// --------------------------------------------------------------------------------------------------------

let sheepCount = 0;
function addSheep(){
    sheepCount++      // produces side effect
}
addSheep();
addSheep();
addSheep();
console.log(sheepCount);

function addSheep2(count){
    return count+1   // no side effects
} 
sheepCount = addSheep2(sheepCount);
sheepCount = addSheep2(sheepCount);
sheepCount = addSheep2(sheepCount);
console.log(sheepCount);