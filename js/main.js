function adivinarnumero () {
const numerodeprovincias = 9;
let intentos = 0;
let correcto = false;


  while (correcto === false) {
    const intento = parseInt (prompt("Intenta adivinar el numero de provincias del continente Tamriel del 1 al 20"));
    intentos++;
    
    if (intento === numerodeprovincias) {
        alert ("Bien hecho ,has acertado el numero de provicias de Tamriel en " + intentos + " intentos.");
        correcto = true;

        let queresintentar = confirm("¿Queres intentarlo otra vez?");
        if (queresintentar === true) {
           adivinarnumero();}
           else {alert ("Gracias por Participar");}
    } else if (intento < numerodeprovincias) {alert("El numero es mas grande,volve a intentarlo");}
      else if (intento > numerodeprovincias) {alert("El numero es mas pequeño,volve a intentarlo");}
      else  { alert ( "El numero no es valido,volve a intentarlo.");}
     

  }

}
adivinarnumero();

