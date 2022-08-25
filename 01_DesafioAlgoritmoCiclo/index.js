/*Se pide ingresar la edad*/
let edad = parseInt(prompt("Ingrese su edad"));

/*Se valida si la edad es mayor a 18*/
while(edad<18){

    /*Se muestra mensaje indicando que no es mayor de edad y se solicita ingresar nuevamente la edad */
    alert("No eres mayor de edad");

    edad = parseInt(prompt("Ingrese su edad"));
}

/*Es mayor de edad y muestra el mensaje*/
let mensaje = "Eres mayor de edad";

alert(mensaje);