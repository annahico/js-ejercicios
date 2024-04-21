/*
Crear algoritmo que devuelva
el precio del producto
más impuesto
*/

function precioCompleto(precio, impuesto) {
     return precio + precio * impuesto; //se puede redondear pero aún no se ha visto la teoría
}

let resultado = precioCompleto(19.90, 0.15); //precio + impuesto
console.log(resultado);