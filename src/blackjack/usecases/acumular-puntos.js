import { valorCarta } from './valor-carta';

/**
 * 
 * @param {String} carta carta jugada
 * @param {number} turno nº de jugador que está jugando. El primer jugador es el turno 0, el ordenador es el último
 * @param {Array<number>} puntosJugadores tabla de puntos de todos los jugadores
 * @param {Array<string>} puntuacionHTML lista de nodos HTML para cambiar la puntuación
 * @returns number Puntuación obtenida
 */

export const acumularPuntos = (carta, turno, puntosJugadores, puntuacionHTML) => {

    puntosJugadores[turno] = puntosJugadores[turno]  + valorCarta(carta);
    puntuacionHTML[turno].innerText = puntosJugadores[turno];
    return puntosJugadores[turno];
}

export default acumularPuntos;