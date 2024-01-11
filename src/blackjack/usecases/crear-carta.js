/**
 * 
 * @param {Stringh} carta carta a añadir a su nodo
 * @param {nodehtml} divCartas lista nodos con las cartas de cada jugador
 */

export const crearCarta = (carta, divCartas) => {
    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${ carta }.png`;
    imgCarta.classList.add('carta');
    divCartas.append(imgCarta);
}

export default crearCarta;