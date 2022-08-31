/*Se declara las variables globales*/
let dinero = 80;
let ganancia = 0;
let apuesta = 50;
let numero  = 0;

/*Se valida que el número del dado debe ser 1, 2, 3, 4, 5 ó 6 */
function validaNumero(input) {

    switch(input){
        case 1:
            return true;
        case 2:
            return true;
        case 3:
            return true;
        case 4:
            return true;
        case 5:
            return true;
        case 6:
            return true;
        default:
            alert( "El valor debe ser del 1 al 6");
            return false;

    }
}


while(dinero > 0 && apuesta >0){

    /*Obtenemos al azar el número del dado */
    let dado = Math.floor(Math.random() * 6 ) + 1;

    /*Preguntamos cual número quiere apostar*/
    numero= parseInt(prompt("Cúal es el número que quiere apostar, del 1 al 6 "));

    let valida = validaNumero(numero);

    /*Se verifica si el número de dado es correcto */
    if (valida === true){

        apuesta = parseInt(prompt("Qué cantidad quiere apostar"));

        if (apuesta > 0){
            /*Escribe el número del dado al azar en el documento */
            document.write(`El número es: ${dado}` );

            /*Preguntamos si el número ingresado coincide con el dado al azar */
            if (numero === dado){

                /*Se multiplica por 2 la apuesta y se suma el dinero actual y se actualiza todo el saldo */
                dinero = dinero + apuesta * 2 ;
                alert(`Ganaste ${dinero}`);
            }
            else{
                /*Al dinero actual se le resta la apuesta y se agtualiza todo el saldo */
                dinero = dinero - apuesta

                /*Preguntamos si el dinero es negativo*/
                if (dinero < 0){
                    alert("Ya no tiene saldo suficiente. Perdiste, se terminó el juego" );
                    break; 
                }
                else{
                    alert(`Perdiste ${apuesta}, ahora tienes ${dinero}`);
                }                
            }

            /*Preguntamos si tiene dinero para apostar */
            if (dinero ===0){
                alert("Perdiste, se terminó el juego");
                break;
            }

            /*Si el dinero es mayor a 200, entonces gana*/
            if (dinero >= 200){
                alert("Ganaste el juego, felicidades");
                break;
            }
        }
        else{
            alert("El monto apostar debe ser mayor al valor 0");
            break;
        }        

    }
    
}