import _ from 'underscore';

/**
 * Esta función crea una nueva baraja (deck)
 * @param {Array<string>} tiposDeCarta Ejemplo: ['C','D','H','S']
 * @param {Array<string>} tiposEspeciales Ejemplo: ['A','J','Q','K']
 * @returns {Array<string>} retorna un nuevo deck de cartas
 */
export const crearDeck = ( tiposDeCarta, tiposEspeciales) => {

    if(!tiposDeCarta || tiposDeCarta.length === 0) throw new Error('TiposDeCarta es obligatorio');
    if(!tiposEspeciales || tiposEspeciales.length === 0) throw new Error('TiposEspeciales es obligatorio');

    let deck = [];

    for(let tipo of tiposDeCarta){
        for( let i = 2; i <= 10; i++){
            deck.push(i + tipo);
        }
        for(let especial of tiposEspeciales){
            deck.push(especial+tipo);
        }
    }

    return _.shuffle(deck);
}

export default crearDeck;
