let transformarNombresAMayusculas = (nom) => {
    return nom.map(nom => nom.toUpperCase())
}

let nom = ['juan', 'camilo', 'zuniga', 'juanca','montano']
let nombresEnMayusculas = transformarNombresAMayusculas(nom)
console.log(nombresEnMayusculas)
