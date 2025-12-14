// phases of Promises
// Error handling
// hot to create Promises ? How to use them ?
// chain of Promises

// Asynchronous function doesn't block execution of code after it




// convert callbacks to Promises
// by default promie is in PENDING state, other two are RESOLVED, REJECTED
// Promise maker
function getWeather(){
    return new Promise(function(resolve, reject){    // "creating promise object"
        setTimeout(function(){
            // reject("Error");
            resolve("Windy");
        })
    });   
}



// Promise receiver
let promise = getWeather();
console.log(promise);

// .then runs when promise is fulfilled,  .then(CB_Success, SC_Error)  ---> both CB's will receive Promise Obj by default
promise.then(function(data){
    console.log(data)
})


// creatign callbacks
function onSuccess(data){
    console.log(`Success : ${data}`);
}
function onError(error){
    console.log(`Error : ${error}`);
}
function inTheEnd(){
    console.log("Response has been generated for the promise");
}

promise.then(onSuccess, onError)

promise.then(onSuccess)
       .catch(onError)  //catch takes only one CB, data send by 'reject' is passed to CB
       .finally(inTheEnd)
       //IMP either put two CB,s in then or use 'catch' block
       // 'finally' is an optional method we can use, which always run despite any response
 
/* 
we can aslo do 
promse.then(CB1)
      .then(CB2)    ---> CB1 will receive data from original API, CB2 will receive data modified from CB1
*/


function fn1(){
    return new Promise((rsl, rej) =>  {
        setTimeout(()=>{
            rsl(100)
        }, 100)
    })
}


fn1().then((data)=>{
    console.log(`The value is : ${data}`);
})
