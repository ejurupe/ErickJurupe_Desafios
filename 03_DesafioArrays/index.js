/*Se declara la clase Postulante*/
class Postulante {
    constructor(nombre, apellido, edad, perfil){
        this.nombre  = nombre.toUpperCase();
        this.apellido  = apellido.toUpperCase();
        this.edad  = parseInt(edad);
        this.perfil  = perfil.toUpperCase();
        this.registrado = true;
        this.aprobaado = false;
        this.fecha = Date();
    }
}

/*Se declara el array postulantes */
const postulantes = [];

/*Agregamos el objeto con el método push */
postulantes.push(new Postulante("José","Perez",18,"Visita"));
postulantes.push(new Postulante("Juan","Huaman",32,"Temporal"));
postulantes.push(new Postulante("Piero","Pastor",25,"Permanente"));
postulantes.push(new Postulante("Victor","Ronceros",55,"Visita"));

/*Listamos los objetos creados */
console.log(postulantes);

const encontrarIndex = (array,elemento) =>{
    for(let index=0;index < array.lenght; index++){
        if (array[index] === elemento){
            return index;
        }
    }
}

console.log(encontrarIndex(postulantes,"PIERO"));






/*Variables para que se ingrese desde el navegador y se agregue la clase postulante 
let nombres = prompt("Ingrese sus nombres");
let apellidos = prompt("Ingrese sus apellidos");
let edad = parseInt(prompt("Ingrese su Edad"));
let perfil = prompt("Ingrese el perfil de psotulanción: Visita/Permanente o Temporal");

let obj = new Postulante (nombres, apellidos, edad, perfil);
postulante.push(obj);

console.log(postulante);
*/