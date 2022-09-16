/*Se declara la variable para obtener el div donde se visualziará el resultado de la búsqueda, registro o eliminación */
let divResultado = document.getElementById("resultado");

/*Se declara el formulario*/
let formulario = document.getElementById("frm");

formulario.addEventListener("submit",(e) => {
    e.preventDefault();
    divResultado.innerHTML = "";

    let inputs = e.target.children;

    //console.log(inputs);

    /*Obtenemos los valores de los inputs */
    let nombres = inputs[2].value;
    let apellidos = inputs[6].value;
    let documento = inputs[10].value;
    let edad = inputs[14].value;
    let registrado = true;
    let aprobado = false;
    let fechaRegistro= Date();
    let id = listaPostulante.length + 1


    /*Agregamos el psotulante al arreglo */
    listaPostulante.push({id, nombres, apellidos, documento, edad, registrado, aprobado,fechaRegistro});
    

    /*Recorremos el arreglo para mostrarlo en el div resultado */
    for (const postulante of listaPostulante) {
        /*Creamos un div*/
        let item = document.createElement("div");
        item.innerHTML = `<h3>Postulante: ${postulante.id}</h3>
                            <p>Nombres: ${postulante.nombres}</p>
                            <p>Apellidos: ${postulante.apellidos}</p>
                            <p>Documento: ${postulante.documento}</p>
                            <p>Edad: ${postulante.edad}</p>`;
        
        /*Agregamos el div al contenedor del resultado */
        divResultado.append(item);
    }

})


/*Declaración de array de lista de postulantes */
const listaPostulante = [];



// /*Se declara la variable para obtener el div donde se visualziará el resultado de la búsqueda, registro o eliminación */
// let divResultado = document.getElementById("resultado");

// /*Declaramos la variable postulante, el cual nos permite almacenar la búsqueda, registro o eliminación */
// let postulante;


// /*Función para buscar un postulante*/
// function buscarPostulante(docu) {
//     /*Limpiamos el contenedor*/
//     divResultado.innerHTML="";
//     postulante =  listaPostulante.find(({documento}) => documento === docu);   

//     if(postulante === undefined){
//         divResultado.innerHTML = "<h3>No se encontraron resultados con el filtro ingresado</h3>";
//         divResultado.className = "rojoError";
//     }
//     else{
//         divResultado.innerHTML = `<h2>Resultado de búsqueda</h2>
//                         <p>ID: ${postulante.id}</p>
//                         <p>Nombres: ${postulante.nombres}</p>
//                         <p>Apellidos: ${postulante.apellidos}</p>
//                         <p>Documento: ${postulante.documento}</p>
//                         <p>Edad: ${postulante.edad}</p>`;
//     }
// }

// /*Funcion para registrar postulante*/
// function agregarPostulante(){
//     /*Agregamos título al contenedor del resultado*/
//     divResultado.innerHTML="<h2>Resultado del registro</h2>";

//     /*Variables para que se ingrese desde el navegador y se agregue al arreglo postulante */
//     let nombres = prompt("Ingrese sus nombres");
//     let apellidos = prompt("Ingrese sus apellidos");
//     let documento = prompt("Ingrese su número de documento");
//     let edad = parseInt(prompt("Ingrese su Edad"));
//     let registrado = true;
//     let aprobado = false;
//     let fechaRegistro= Date();
//     let id = listaPostulante.length + 1

//     listaPostulante.push({id, nombres, apellidos, documento, edad, registrado, aprobado,fechaRegistro});
//     //console.log(listaPostulante);

//     for (const postulante of listaPostulante) {
//         /*Creamos un div*/
//         let item = document.createElement("div");
//         item.innerHTML = `<h3>Postulante: ${postulante.id}</h3>
//                             <p>Nombres: ${postulante.nombres}</p>
//                             <p>Apellidos: ${postulante.apellidos}</p>
//                             <p>Documento: ${postulante.documento}</p>
//                             <p>Edad: ${postulante.edad}</p>`;
        
//         /*Agregamos el div al contenedor del resultado */
//         divResultado.append(item);
//     }
// }

// /*Funcion para eliminar postulante */
// const eliminarPostulante = (documento) => {

//     /*Limpiamos el contenedor*/
//     divResultado.innerHTML="";

//     let itemEliminado = document.createElement("div");

//     for(const item of listaPostulante){
//         if (item.documento === documento){

//             itemEliminado.innerHTML = `<h3>Postulante eliminado: ${item.id}</h3>
//                             <p>Nombres: ${item.nombres}</p>
//                             <p>Apellidos: ${item.apellidos}</p>
//                             <p>Documento: ${item.documento}</p>
//                             <p>Edad: ${item.edad}</p>`;
//             itemEliminado.className="postulanteEliminado";
//             divResultado.append(itemEliminado);
//             listaPostulante.splice(listaPostulante.indexOf(item), 1);
//         }
//       }

//       let itemRestante = document.createElement("div");
//       itemRestante.innerHTML="<h3>Lista de postulante actual:</h3>"
//       divResultado.append(itemRestante);
//       for (const postulante of listaPostulante) {
//         let item = document.createElement("div");
//         item.innerHTML=`<p>Postulante : ${postulante.id}</p>
//                             <p>Nombres: ${postulante.nombres}</p>
//                             <p>Apellidos: ${postulante.apellidos}</p>
//                             <p>Documento: ${postulante.documento}</p>
//                             <p>Edad: ${postulante.edad}</p>`;
        
//         /*Agregamos el div al contenedor del resultado */
//         divResultado.append(item);
//     }
//      //console.log(listaPostulante);
// }


// /*Se declara el tipo de operación para obtener el tipo de operación a realizar*/
// let tipoOperacion;

// tipoOperacion = prompt(`¿Desea buscar por nombres o número de documento?
// 1- Registrar Postulante
// 2- Buscar Postuante
// 3- Elimminar Postulante
// `)

// switch (tipoOperacion){
//     case "1":
//         agregarPostulante();
//         break;
//     case "2":
//         buscarPostulante(prompt("Ingrese el número de documento a buscar"));
//         break;
//     case "3":
//         eliminarPostulante(prompt("Ingrese el número de documento para eliminar postulante"));
//         break;
//     default:
//         break;
// }