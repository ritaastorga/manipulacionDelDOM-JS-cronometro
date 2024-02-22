const botonInicioPausa = document.getElementById("botonInicioPausa");
const botonReiniciar = document.getElementById("botonReiciar");

let [hora, minutos, segundos] = [0, 0, 0];

let intervaloDeTiempo;
let estadoCronometro = "pausado";

function actualizarCronometro(){
  segundos++;


  if (segundos / 60 === 1){
    segundos = 0;
    minutos++;

    if(minutos / 60 === 1){
      minutos = 0;
      horas++;
    }
  }

  const segundosConFormato
  const minutosConFormato
  const horassConFormato

}

