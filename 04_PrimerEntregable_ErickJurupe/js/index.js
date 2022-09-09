/*Se declara la clase Postulante*/
class Postulante {
    constructor(nombres, apellidos, documento, edad){
        this.nombres  = nombres;
        this.apellidos  = apellidos;
        this.documento  = documento;
        this.edad  = parseInt(edad);
        this.registrado = true;
        this.aprobado = false;
        this.fecha = Date();
    }
}

/*Declaración de array de lista de postulantes */
const listaPostulante = [
    { nombres: "Gabriela Maria", apellidos:"Ruiz pastor", documento: "25632145", edad: 25, registrado: true, aprobado: true, fechaRegistro: Date() },
    { nombres: "Juan José", apellidos:"Mola Perez", documento: "78459652", edad: 25, registrado: true, aprobado: false, fechaRegistro: Date()  },
    { nombres: "Piero Paolo", apellidos:"Dominguez López", documento: "47529632", edad: 25, registrado: true, aprobado: true, fechaRegistro: Date()  },
    { nombres: "Arturo Luis", apellidos:"Sanchez Ronceros", documento: "41452639", edad: 25, registrado: true, aprobado: true, fechaRegistro: Date()  },
    { nombres: "Anthonny Alfredo", apellidos:"Ramirez Cruz", documento: "86532147", edad: 25, registrado: true, aprobado: false, fechaRegistro: Date()  },
    { nombres: "Daniel Bruno", apellidos:"Silva Fernandez", documento: "40203047", edad: 25, registrado: true, aprobado: true, fechaRegistro: Date()  },
    { nombres: "Felipe Elias", apellidos:"Diaz Gomez", documento: "02456987", edad: 25, registrado: true, aprobado: false, fechaRegistro: Date()  },
    { nombres: "Leonanrdo Omar", apellidos:"Muñoz Romero", documento: "03658921", edad: 25, registrado: true, aprobado: false, fechaRegistro: Date()  },
    { nombres: "Santiago Vicente", apellidos:"Cardenas Miranda", documento: "07080904", edad: 25, registrado: true, aprobado: false, fechaRegistro: Date()}
];

/*Funcion para registrar postulante*/
function agregarPostulante(){
    /*Variables para que se ingrese desde el navegador y se agregue al arreglo postulante */
    let nombres = prompt("Ingrese su nombre");
    let apellidos = prompt("Ingrese su apellido");
    let documento = prompt("Ingrese su número de documento");
    let edad = parseInt(prompt("Ingrese su Edad"));


    let obj = new Postulante ({ nombres: nombres, apellidos: apellidos, documento: documento, edad : edad });

    listaPostulante.push(obj);
    console.log(listaPostulante);
}

/*Función para buscar un postulante*/
function buscarPostulante(docu) {
    let postulante = listaPostulante.find(({documento}) => documento === docu);

    if(postulante === undefined){
        alert("postulante no encontrado");
    }else{
        alert(`Resultado de búsqueda:
        Id: ${postulante.id}
        Nombres: ${postulante.nombres}
        Apellidos: ${postulante.apellidos},
        N° Documento: ${postulante.documento}
        Edad: ${postulante.edad}`);
            // console.log(postulante);
    }
}
//buscarPostulante("02456987");

/*Funcion para eliminar postulante */
const eliminarPostulante = (documento) => {
    for(const item of listaPostulante){
        if (listaPostulante.documento === documento){
            listaPostulante.splice(item,1);
        }
      }
    console.log(listaPostulante);
}

/*Se declara la variable para obtener el nombre ingresado */
let nombre = prompt("¡Hola! Ingrese su nombre a continuación:");
alert(`Bienvenid@ ${nombre}`)

/*Se declara el tipo de operación para obtener el tipo de operación a realizar*/
let tipoOperacion;

tipoOperacion = prompt(`¿Qué tipo de operación desea realizar?
1- Registrar Postulante
2- Buscar Postuante
3- Elimminar Postulante
`)

switch (tipoOperacion){
    case "1":
        agregarPostulante();
        break;
    case "2":
        buscarPostulante(prompt("Ingrese el número de documento a buscar"));
        break;
    case "3":
        eliminarPostulante(prompt("Ingrese el número de documento para eliminar postulante"));
        break;
    default:
        break;
}

