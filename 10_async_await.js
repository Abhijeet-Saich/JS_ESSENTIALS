
function getV(){
    return new Promise((res, rej) => {
        setTimeout(()=>{
            // res(100);
            rej("Something went wrong!!")
        }, 1000)
    })
}

async function getData2(){
    getV().then((data) => {
        console.log(data);   
    })
}

//a cleaner approch we dont need to write login in then block to handle data
// 'await' keyword can we used inside async functions only   exception --> (chrome dev tools, JS modeules)
// only impacts promise receiver
// we can 'await' any function that returns promise
// 'async' functions by default return a PROMISE 
async function getData(){
    try {
        const data = await getV();
        console.log(data);   // doesn't gets executed till promise value is resolved 
    } catch (error) {
        console.log(error)        
    }
}
// "try / catch" block is used instead of "then / catch"

const me = {
    async getName(){
        return 'I am the best coder!!'
    }
}


getData()