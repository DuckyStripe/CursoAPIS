//Hola mundo
console.log("Hello World!!!!!!!!");
// Variables
let a = 10;
console.log(a)
const b = 10;
console.log(b)
//Arrays
let c = [1,2,3,4,5,6,7,8,9,"Perro"];

//tipos de salida
console.log( `Numero: ${c[0]} `)
console.log( "Numero:"+" "+c[1] )

//Objetos
let nombre="Juan";
let d = {
    nombre,
    apellido: "Perez",
    edad: 20,
    direccion: {
        calle: "Av. Siempre Viva",
        numero: 123,
        colonia:["San Pedro","San Pablo"]
    }
}
console.log(d.direccion.colonia[1])

//Funciones
function suma(a,b){
    let c = a+b;
    return c;
}
console.log(suma(1,2))

const suma2 = (a,b) => a+b;

console.log(suma2(1,2))

//Estructuras de control

//if
// if(1===1){
//     console.log("Verdadero")
// }else{
//     console.log("Falso");
// }   

//for
// for(let i=0;i<10;i++){
//     console.log(i);
// }
while(true){
    console.log("Hola")
    break;
}

