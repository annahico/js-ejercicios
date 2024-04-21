/*
Crear algorítmo que devuelva un
array de objetos en base a pares
*/

let pairs = [
    [1, { name: "Anna" }],
    [2, { name: "Carlos" }],
    [3, { name: "Naruto" }],
];

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

function toCollection(arr) {
    let collection = [];
    for (idx in arr) {
        let elemento = arr[idx];
        collection[idx] = elemento[1];
        collection[idx].id = elemento[0];
    }
    return collection;
}

let resultado = toCollection(pairs);
console.log(resultado);