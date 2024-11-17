function invertirArreglo(array) {

    let arregloInvertido = [];

    for (let i = array.length - 1; i >= 0; i--) {
        arregloInvertido.push(array[i]);
    }

    
    return arregloInvertido;  
}

let numeros = [10,9,8,7,6,5,4,3,2,1];
console.log(invertirArreglo(numeros)); 

let num = [10,20,30,40,50];
console.log(invertirArreglo(num)); 









