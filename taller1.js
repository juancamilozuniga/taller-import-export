 // determina si un numero esta en un rango 

 let rango = (num)=>{

let resultado = (num>10)?"esta en el rango": (num<50)?"no esta en el rango "

 }

 console.log(rango(10));
 console.log(rango(60));
 console.log(rango(45));

 export {rango}