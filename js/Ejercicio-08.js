/*
Crear algorítmo que tome un array de
objetos y devuelva un array de pares
*/

let array = [{
    id: 1,
    name: "Anna",
}, {
    id: 2,
    name: "Carlos",
}, {
    id: 3,
    name: "Naruto",
}];

let pares = [
    [1, { id: 1, name: "Anna"}],
    [2, {id: 2, name: "Carlos"}],
    [3, {id:3, name: "Naruto"}],
];

function toPairs(arr){
    let pairs = [];
    for (idx in arr) {  //IDX es index
        let elemento = arr[idx];
        pairs[idx] = [elemento.id, elemento];
    }
    return pairs;
}

let resultado = toPairs(array);
console.log(resultado);