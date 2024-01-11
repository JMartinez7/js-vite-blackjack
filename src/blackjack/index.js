import { crearDeck as crearNuevoDeck, pedirCarta, acumularPuntos, turnoComputadora, crearCarta } from "./usecases";

const blackJackModule = (() => {
  'use strict'

  let deck = [];
  const tipos = ['C','D','H','S'],
        especiales = ['A','J','Q','K'];
  
  let puntosJugadores = [];
  
  // Referencias del HTML
  const btnPedir = document.querySelector('#btnPedir'),
        btnParar = document.querySelector('#btnParar'),
        btnNuevo = document.querySelector('#btnNuevo');
  
  const divCartas = document.querySelectorAll('.divCartas');

  const puntuacionHTML = document.querySelectorAll('small');
        
  const inicializarJuego = (numJugadores = 1) => {
      deck = crearNuevoDeck(tipos, especiales);
      puntosJugadores = [];

      for(let i = 0; i < numJugadores; i++){
          puntosJugadores.push(0);
      }
      // El jugador computadora
      puntosJugadores.push(0);

      puntuacionHTML.forEach(element => element.innerText = 0);

      divCartas.forEach(element => element.innerHTML = '');
  
      btnPedir.disabled = false;
      btnParar.disabled = false;
      
  }

  // Eventos
  btnPedir.addEventListener('click', () => {
      
      const carta = pedirCarta( deck );
      const puntosJugador = acumularPuntos(carta, 0, puntosJugadores, puntuacionHTML);
      crearCarta(carta, divCartas[0]);
  
      if(puntosJugador > 21) {
          console.warn('Lo siento mucho, perdiste');
          btnPedir.disabled=true;
          btnParar.disabled=true;
          turnoComputadora(puntosJugador, deck, puntosJugadores, puntuacionHTML, divCartas);
      } else if (puntosJugador == 21) {
          console.warn('21, genial');
          btnPedir.disabled=true;
      }
  });
  
  btnParar.addEventListener('click', () => {
      btnPedir.disabled=true;
      btnParar.disabled=true;
      turnoComputadora(puntosJugadores[0], deck, puntosJugadores, puntuacionHTML, divCartas);
  });
  
  btnNuevo.addEventListener('click', () => {
  inicializarJuego();
  });
  
  return {
      nuevoJuego: inicializarJuego
  }
  
}) ();

