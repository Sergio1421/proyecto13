// Importa el módulo prompt-sync para leer la entrada del usuario.
var prompt = require('prompt-sync')();

// Define la función imprimirHorizontal, que imprime una línea horizontal del rectángulo.
const imprimirHorizontal = (ancho, stop, charExtremoIzquierdo, charMedio, charExtremoDerecha) => {
    // Si el ancho es 1 y el stop es diferente de 1, se imprime el carácter del extremo derecho.
    if (ancho === 1 && stop !== 1) {
      process.stdout.write(charExtremoDerecha);
    } 
    // Si el ancho es igual al stop, se imprime el carácter del extremo izquierdo y se llama a la función de nuevo, decrementando el ancho en 1.
    else if (ancho === stop) {
      process.stdout.write(charExtremoIzquierdo);
      imprimirHorizontal(ancho - 1, stop, charExtremoIzquierdo, charMedio, charExtremoDerecha);
    } 
    // Si el ancho es mayor que 0, se imprime el carácter del medio y se llama a la función de nuevo, decrementando el ancho en 1.
    else if (ancho > 0) {
      process.stdout.write(charMedio);
      imprimirHorizontal(ancho - 1, stop, charExtremoIzquierdo, charMedio, charExtremoDerecha);
    }
};

// Define la función imprimirVertical, que imprime las líneas verticales del rectángulo.
const imprimirVertical = (ancho, alto, stop) => {
    // Si el alto es igual al stop, se llama a imprimirHorizontal para imprimir la primera línea, y luego se llama a sí misma, decrementando el alto en 1.
    if (alto === stop) {
      imprimirHorizontal(ancho, ancho, '/', '*', '\\');
      process.stdout.write('\n');
      imprimirVertical(ancho, alto - 1, stop);
    } 
    // Si el alto es 1, se llama a imprimirHorizontal para imprimir la última línea.
    else if (alto === 1) {
      imprimirHorizontal(ancho, ancho, '\\', '*', '/');
      process.stdout.write('\n');
    } 
    // Si el alto es mayor que 0, se llama a imprimirHorizontal para imprimir una línea intermedia, y luego se llama a sí misma, decrementando el alto en 1.
    else if (alto > 0) {
      imprimirHorizontal(ancho, ancho, '*', ' ', '*');
      process.stdout.write('\n');
      imprimirVertical(ancho, alto - 1, stop);
    }
};

// Define la función rush, que maneja la ejecución general del programa.
const rush = (ancho, alto) => {
    // Si el ancho y el alto son mayores que 0, se llama a imprimirVertical para comenzar a dibujar el rectángulo.
    if (ancho > 0 && alto > 0) {
      imprimirVertical(ancho, alto, alto);
    }
};

// Pide al usuario que introduzca el ancho del rectángulo.
ancho = prompt("Ingrese el ancho: ");
// Pide al usuario que introduzca el alto del rectángulo.
alto = prompt("Ingrese el alto: ")
// Llama a la función rush con los valores de ancho y alto proporcionados por el usuario.
rush(ancho, alto);
