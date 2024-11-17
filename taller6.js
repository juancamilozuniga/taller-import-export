let esElegibleParaPrestamo=(salario,puntageCredito)=>{
    
 resultado = (salario>=30000,puntageCredito>=650)?"no elegible para prestamo":"no elegible para prestamo";
return resultado

}

console.log(esElegibleParaPrestamo(35000,700));
console.log(esElegibleParaPrestamo(25000,700));
console.log(esElegibleParaPrestamo(25000,300));

export {esElegibleParaPrestamo}