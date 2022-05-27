/* Ejercicio: Calculo de Descuento
• Implemente un algoritmo que calcule y muestre
por pantalla el precio final de un producto
después de aplicarle un descuento
• El precio inicial del producto es $450,50
• El descuento a aplicar es del 10%. Recuerde que
puede obtener el 10% de un valor multiplicado por 0,1
• El precio y el descuento deben ser guardados en
variables (no ingresados por teclado) */

let precioProducto: number = 450.5;
let porcentajeDescuento: number = 0.1;
let decuento: number = precioProducto * porcentajeDescuento;
let precioFinal: number = precioProducto - decuento;
console.log(`El precio Final con descuento: `, precioFinal);
