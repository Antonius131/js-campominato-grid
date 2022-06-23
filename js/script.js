/**
 * 
 * Devo cliccare su un botton che genera una griglia quadrata (button.addEventListener)
 *    
 * 
 * Aggiungere una griglia all'interno di un contenitore del DOM (#grid-wrapper)
 *    ogni cella della griglia conterrà un numero progressivo a 1 a 100 ==> griglia 10x10
 *    creare un ciclo che generi dinamicamente 100 celle quadrate   VVV
 *    creare una serie di numeri progressivi da 1 a 100 e inserirli nella cella VVV
 * 
 *    inserire i numeri generati in ogni cella della griglia
 *    al click su una cella, questa si colorerà di azzurro
 * 
 *    inserire le celle così create all'interno della griglia
 *    
 */

const gridWrapper = document.getElementById('grid-wrapper');

for (let i = 0;  i <= 100;  i++) {
   const square = squareGenerator();
   square.innerHTML = i;

}


function squareGenerator() {
      const createSquare = document.createElement('div');
      createSquare.classList.add('square');

      return createSquare;
}