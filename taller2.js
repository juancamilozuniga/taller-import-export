//calcularDescuemto
let calcularDescuento = (num)=>{


let resultado = (num>1000)?"tiene descuento"+num-(num*0.20):(num>500)?
"tiene descuento"+num-(num*0.10):(num<500)?"no tiene descuento"+num

}

export {calcularDescuento}