
//1.1
fetch('https://api.agify.io?name=michael')
// la función 'fetch'nos devuelve una promesa, por tanto uso '.then'. Podría hacerla con 'async await' también.
.then(function(respuesta){return respuesta.json()}).then(function(resData){
// siempre que haga un 'fetch' tengo que usar   .then(function(res){return res.json()}). then....
    console.log(resData)
})

// ahora con arrow function:

fetch('https://api.agify.io?name=michael').then(res=> res.json()).then(resData =>{
    console.log(resData)
});

// ahora con async await
const funcionAsincrona = async()=>{
    const res = await fetch('https://api.agify.io?name=michael');
    const resData= await res.json();
    console.log(resData);
}
funcionAsincrona()
//1.2