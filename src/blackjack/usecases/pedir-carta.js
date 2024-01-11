/**
 * Esta función devuelve la última carta de la baraja
 * @param {Array<String>} deck es un array de string (cartas)
  * @returns {String} retorna una carta
 */

export  const pedirCarta = (deck) => {
  
    if( !deck || deck.length === 0){
        throw 'No hay cartas en la baraja';
    }
    return deck.pop();
}

export default pedirCarta;