// 'fetch' built-in function to send HTTP request, URL is passed to function(request object 'new Request()')
// passing a single sting agrument to function is assumed to be URL 
// fetch is an asynchronous function
// 'fetch' was added in node18 for backend support          

let URL = "https://cat-fact.herokuapp.com/facts"

async function getData(){
    let response = await fetch(URL);         // return Response object, contains STATUS, HEADER, BODY
    // let jdata = await response.json();    // reads RESPONSE's body --> parses JSON text --> return JS object 
    console.log(response)
}

getData();


//making 'Request' object
// let req = new Request(URL,{
//     headers : {
//         Authorization : 'Bearer alskdjvxn128ychzkqyhfsuur0dasbc835y'
//     }
// })

// fetch(req).then()
//           .catch()
