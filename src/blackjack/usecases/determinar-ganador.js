/**
 * @param {Array<number>} puntosJugadores 
 */

export const determinarGanador = (puntosJugadores) => {
      
    const [puntosMinimos, puntosOrdenador] = puntosJugadores;

    setTimeout(()=> {
       
        if( puntosOrdenador === puntosMinimos){
            alert('Nadie gana :(');
        } else if( puntosMinimos > 21) {
            alert('Computadora gana')
        } else if(puntosOrdenador > 21) {
            alert('Jugador gana');
        } else {
            alert('Computadora gana')
        }
    }, 100);
}

export default determinarGanador;
