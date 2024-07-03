/*
Crea una lista vacía llamada "listaGenerica".
Crea una lista de lenguajes de programación llamada "lenguagesDeProgramacion con los siguientes elementos: 'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.
Agrega a la lista "lenguagesDeProgramacion los siguientes elementos: 'Java', 'Ruby' y 'GoLang'.
Crea una función que muestre en la consola todos los elementos de la lista "lenguajesDeProgramacion.
Crea una función que muestre en la consola todos los elementos de la lista "lenguajesDeProgramacion en orden inverso.
Crea una función que calcule el promedio de los elementos en una lista de números.
Crea una función que muestre en la consola el número más grande y el número más pequeño en una lista.
Crea una función que devuelva la suma de todos los elementos en una lista.
Crea una función que devuelva la posición en la lista donde se encuentra un elemento pasado como parámetro, o -1 si no existe en la lista.
Crea una función que reciba dos listas de números del mismo tamaño y devuelva una nueva lista con la suma de los elementos uno a uno.
Crea una función que reciba una lista de números y devuelva una nueva lista con el cuadrado de cada número.
*/

let listaGenerica = [];

let lenguajesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];

console.log(lenguajesDeProgramacion);

lenguajesDeProgramacion.push('Java', 'Ruby', 'GoLang');

console.log(lenguajesDeProgramacion);

function mostrarElementosListaLenguajes() {    
    for (let lenguaje of lenguajesDeProgramacion) {
        console.log(lenguaje);
    }
}
mostrarElementosListaLenguajes();

function mostrarElementosListaLenguajesInverso() {
    let listaInversa = lenguajesDeProgramacion.reverse();
    for (let lenguaje of listaInversa) {
        console.log(lenguaje);
    }
}
mostrarElementosListaLenguajesInverso();

function calcularPromedioLista(listaNumeros) {    
    let suma = 0;
    for (let i = 0; i < listaNumeros.length; i++) {
        suma = suma + listaNumeros[i];
    }
    promedio = suma / listaNumeros.length;
    return promedio;
}

let listaNumeros = [10, 20, 30, 40, 50, 60];
console.log(listaNumeros);
console.log(Math.round(calcularPromedioLista(listaNumeros)));

function mostrarNumeroGrandePequenio(listaNumeros) {

    let numeroMayor = 0;
    let numeroMenor = listaNumeros[0];

    for (let i = 0; i < listaNumeros.length; i++) {
        if (listaNumeros[i] > numeroMayor) {
            numeroMayor = listaNumeros[i];
        }
        if (listaNumeros[i] < numeroMenor) {
            numeroMenor = listaNumeros[i];
        }
    }
    console.log(`El número menor es: ${numeroMenor}`);
    console.log(`El número mayor es: ${numeroMayor}`);
}

mostrarNumeroGrandePequenio(listaNumeros);

function mostrarSuma(listaNumeros) {
    let suma = 0;

    for (let i = 0; i < listaNumeros.length; i++) {
        
        suma += listaNumeros[i];
    }
    return suma;
}

console.log(mostrarSuma(listaNumeros));

function identificarPosicion(listaNumeros, num) {
    
    let indice = 0;

    for (let i = 0; i < listaNumeros.length; i++) {
        if (listaNumeros[i] === num) {
            indice = i;
        }
    }
    if (indice == 0) {
        return -1;
    }
    return indice;
}

console.log(identificarPosicion(listaNumeros, 60));

function sumaUnoAUno(lista1, lista2) {

    let nuevaLista = [];
    let suma = 0;

    for (let i = 0; i < lista1.length; i++) {
                
        suma = lista1[i] + lista2[i];
        nuevaLista.push(suma);
    }

    return nuevaLista;
}

let listaNumeros2 = [20, 30, 40, 50, 60, 70];

console.log(listaNumeros);
console.log(listaNumeros2);
console.log(sumaUnoAUno(listaNumeros, listaNumeros2));

function listaCuadrados (lista) {

    let nuevaLista = [];
    let cuadrado = 0;

    for (let i = 0; i < lista.length; i++) {
                
        cuadrado = lista[i] * lista[i];
        nuevaLista.push(cuadrado);
    }

    return nuevaLista;
}

console.log(listaNumeros);
console.log(listaCuadrados(listaNumeros));
