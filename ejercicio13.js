let personas = [
    { nombre: 'luis', edad: 20 },
    { nombre: 'daniel', edad: 25 },
    { nombre: 'carlo', edad: 35 },
    { nombre: 'luisa', edad: 33 }
]
function buscarPersona(nombreBuscado, arregloPersonas) {
    for (let i = 0; i < arregloPersonas.length; i++) {
        if (arregloPersonas[i].nombre.toLowerCase() === nombreBuscado.toLowerCase()) {
        return arregloPersonas[i]
        }
    }
    return `Persona con el nombre ${nombreBuscado} "no fue encontrada.`
}
console.log(buscarPersona('luis', personas)) 

console.log(buscarPersona('daniel', personas)) 

console.log(buscarPersona('carlos', personas)) 

function buscarPersona(nombreBuscado, arregloPersonas) {
    return arregloPersonas.find(persona => persona.nombre.toLowerCase() === nombreBuscado.toLowerCase()) || `Persona con el nombre ${nombreBuscado} no pertenece.`;
}


