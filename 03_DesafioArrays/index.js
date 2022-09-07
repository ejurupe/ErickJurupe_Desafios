/*Se declara la clase Postulante*/
class Postulante {
    constructor(nombre, apellido, edad, perfil){
        this.nombre  = nombre;
        this.apellido  = apellido;
        this.edad  = parseInt(edad);
        this.perfil  = perfil;
        this.registrado = true;
        this.aprobaado = false;
        this.fecha = Date();
    }
}

/*Se declara el array postulantes */
const postulantes = [];


/*Variables para que se ingrese desde el navegador y se agregue la clase postulante */
let nombre = prompt("Ingrese su nombre");
let apellido = prompt("Ingrese su apellido");
let edad = parseInt(prompt("Ingrese su Edad"));
let perfil = prompt("Ingrese el perfil de psotulanción: Visita/Permanente o Temporal");

let obj = new Postulante (nombre, apellido, edad, perfil);
postulantes.push(obj);

console.log(postulantes);
