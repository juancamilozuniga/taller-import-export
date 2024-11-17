const reemplazarElemento = (arreglo, valorActual, nuevoValor) => {
    const indice = arreglo.indexOf(valorActual);

    if (indice !== -1) {
        arreglo[indice] = nuevoValor;
    } else {
        console.log('El valor actual no se encuentra en el arreglo.');
    }

    return arreglo;
};

let frutas = ['manzana', 'banana', 'naranja', 'pera'];
let resultado = reemplazarElemento(frutas, 'naranja', 'kiwi');

console.log(resultado); 
