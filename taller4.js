let nivelRiesgo(num)=>{

    let resultado = (num<60)?"Alto riesgo ":(num>40&&num<60)?"Riesgo moderado":"bajo riesgo"
    return resultado

}

export {nivelRiesgo}