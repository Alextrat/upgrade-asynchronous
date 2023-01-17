const baseUrl = 'https://api.nationalize.io/?name=';
const input$$ = document.querySelector('input');

const remove= (elemento) => {  // creo esta función y le paso por parámetro el div que quiero eliminar
    elemento.remove()
}

const search = () => {
    fetch(baseUrl + input$$.value)
    .then(res => res.json())
    .then(res =>{
      console.log(res);
    const frase$$ = document.createElement('h4')
    const boton$$ = document.createElement('button')
    boton$$.innerText = 'X'
   
    const porcentaje = res.country[0].probability
    const nacionalidad = res.country[0].country_id
    const porcentaje2 = res.country[2].probability
    const nacionalidad2 = res.country[2].country_id

    frase$$.innerText = 'el nombre '+ input$$.value + ' tiene un ' + porcentaje+ ' % de ser de ' + nacionalidad +
    ' y un ' + porcentaje2 + ' % de ser de ' + nacionalidad2+ ' .'

    boton$$.addEventListener('click', ()=> remove(frase$$))
    frase$$.appendChild(boton$$)
    document.body.appendChild(frase$$)
    })


}
const button$ = document.querySelector('button');
button$.addEventListener('click', search);

// 2.3 En base al ejercicio anterior. Crea dinamicamente un elemento  por cada petición 
// a la api que diga...'El nombre X tiene un Y porciento de ser de Z' etc etc.
// EJ: El nombre Pepe tiene un 22 porciento de ser de ET y un 6 porciento de ser 
// de MZ.
                // EL EJERCICIO ESTÁ IMPLEMENTADO SOBRE EL ANTERIOR ARRIBA !! //
                
// 2.4 En base al ejercicio anterior, crea un botón con el texto 'X' para cada uno 
// de los p que hayas insertado y que si el usuario hace click en este botón 
// eliminemos el parrafo asociado.

                // EL EJERCICIO ESTÁ IMPLEMENTADO SOBRE EL ANTERIOR ARRIBA !! //



