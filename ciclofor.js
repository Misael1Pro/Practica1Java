// Escribe un bucle que escriba en la consola 10 veces
// “Me encanta Javascript!”

for(let i=0; i<=10;i++){
    console.log("“Me encanta Javascript!”")
 
}
// Escribe un bucle que recorra un array con números y escriba cada número en la consola.
let notas =[71,80,86,76,45]
let limite=0
let pasaron=0
let nopasaron =0
let total = notas.length

for(let posicion=0; posicion<= notas.length-1; posicion++){
    if(notas[posicion]<=70){
        nopasaron   ++
    }else
    pasaron++
}
console.log("pasaron " +pasaron +"Estudiantes")
console.log("No pasaron " +nopasaron +"Estudiantes")

// Escribe bucle que evalue las notas (imprimir en consola) de los estudiantes que están almacenadas en un array. (Crear ese array)

