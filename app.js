const cronometro = document.getElementById("cronometro");
const botonInicioPausa = document.getElementById("botonInicioPausa");
const botonReiniciar = document.getElementById("botonReiciar");

let [hora, minutos, segundos] = [0, 0, 0];

let intervaloDeTiempo;
let estadoCronometro = "pausado";

function actualizarCronometro() {
  segundos++;

  if (segundos / 60 === 1) {
    segundos = 0;
    minutos++;

    if (minutos / 60 === 1) {
      minutos = 0;
      horas++;
    }
  }

  const segundosConFormato = asignarFormato(segundos);
  const minutosConFormato = asignarFormato(minutos);
  const horasConFormato = asignarFormato(horas);

  cronometro.innerText = `${horasConFormato}:${minutosConFormato}:${segundosConFormato}`;
}

function asignarFormato(unidadDeTiempo) {
  return unidadDeTiempo < 10 ? "0" + unidadDeTiempo : unidadDeTiempo;
}

botonInicioPausa.addEventListener("click", function () {
  if (estadoCronometro === "pausado") {
    intervaloDeTiempo = window.setInterval(actualizarCronometro, 1000);
    botonInicioPausa.innerHTML = '<i class="bi bi-pause-fill"></i>';
    botonInicioPausa.classList.remove("pausar");
    estadoCronometro = "corriendo";
  } else {
    window.clearInterval(intervaloDeTiempo);
    botonInicioPausa.innerHTML = '<i class="bi bi-play-fill"></i>';
    botonInicioPausa.classList.remove("pausar");
  }
});
