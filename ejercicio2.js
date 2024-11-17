function contarPares(arr) {
  let contador = 0; // Inicializamos el contador en 0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) { // Verificamos si el número es par
      contador++; // Incrementamos el contador si es par
    }
  }
  return contador; // Retornamos la cantidad de números pares
}
console.log(contarPares([1,2,3,4,5,6,7,8,9]))
console.log(contarPares([1,2,3,4,5,6,7,8,9,10,12,14,16]))    