// what is constructor function ?
// blueprint for creating objects

// Q: cons. funct donesm't return anything so how assignment happens ?
// JS creates an object named this, add prop and methods to it and returns 'this' [MAGIC] 

// CLASSES are just constructors, as easier way of writing aka 'SYNTACTIC SUGAR'


function Car(x){
    this.company = x
}

const c1 = new Car('Porche');
console.log(c1)


function SuperElement(type, content){
    this.el = document.createElement(type);
    this.el.innerText = content;
    document.body.append(this.el)
    this.el.addEventListener('click',()=>{console.log(this.el)})
}