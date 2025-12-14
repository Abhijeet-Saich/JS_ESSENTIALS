// copying by reference and values
// primitives vs objects

let a = [1]
let b = [2]
console.log(a === b);     // a and b have different address values


const mName = 'Abhijeet';         // var points to value
const myCar = {};                 // var points to address
console.log(a === b);


let abhi = {name :'abhi'};
let pika = abhi

pika.name = 'sundari';   
console.log(abhi)                    //original object got changed
