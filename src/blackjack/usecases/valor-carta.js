/**
 * Esta función devuelve el valor de la carta seleccioanada
 * @param {String} carta 
 * @returns {number} retorna el valor de la carta
*/

export const valorCarta = ( carta ) => {
    const valor = carta.substring(0, carta.length -1);
    return isNaN(valor) 
        ? (valor === 'A' ? 11: 10)
        : valor * 1;
}

export default valorCarta;