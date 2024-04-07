/*
indice validar que no sea menor a cero y que el elemento exista
en el array
*/

function getByIdx(arr, idx) {
    // if (idx < 0) {
    if (idx < 0 || arr.lengt <= idx) {
        return "Elemento no existe";
    }
    // if (arr.lengt <= idx) {
    //     return "Elemento no existe";
    return arr [idx];
}


let resultado = getByIdx([1, 2], 0);
console.log(resultado);