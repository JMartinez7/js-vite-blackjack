import { pedirCarta, crearCarta, acumularPuntos, determinarGanador } from './index';

/**
 * 
 * @param {Number} puntosMinimos puntos mínimos que la computadora tiene que superar
 * @param {Array<String>} deck baraja de cartas
 * @param {Array<number>} puntosJugadores puntuación de todos los jugadores
 * @param {Array<String>} puntuacionHTML nodes HTML con la puntuación de todos los jugadores
 * @param {Array<String>} divCartas nodes HTML con las cartas de los jugadores
 */

// Turno computadora
export const turnoComputadora = ( puntosMinimos, deck, puntosJugadores, puntuacionHTML, divCartas ) => {
      
    if(!puntosMinimos || !deck || !puntosJugadores ) throw new Error('Faltan la puntuación o la baraja');

    let puntosOrdenador = 0;
    do {
        
        const carta = pedirCarta( deck );
        puntosOrdenador = acumularPuntos(carta, puntosJugadores.length -1, puntosJugadores, puntuacionHTML);
        crearCarta(carta, divCartas[puntosJugadores.length -1]);

    } while( (puntosOrdenador < puntosMinimos) && (puntosMinimos <= 21) );

    determinarGanador(puntosJugadores);

}

export default turnoComputadora;
