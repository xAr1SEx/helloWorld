//Pedir número mediante prompt y sumarle otro número en cada repetición,realizando una salida por cada resultado.
let acum =0
let entrada = parseInt(prompt("Ingresar un numero"));
while(entrada != "ESC" ){
    acum = entrada + acum;
    alert(`el numero es ${parseInt(acum)}`);
    entrada = prompt("Ingresar otro numero");
    entrada = parseInt(entrada);
}