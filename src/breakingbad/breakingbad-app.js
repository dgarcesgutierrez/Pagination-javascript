
// como hacer peticiones http

/**
 * @returns {Promise<Object>} character information
 */
const fetchCharacter = async() => {
  
  const res = await fetch('https://thronesapi.com/api/v2/Characters');
  const data = await res.json();

  console.log(data[Math.floor(Math.random()*data.length)]);
  return data[Math.floor(Math.random()*data.length)];
}

// fecth metodo, objeto global en window ya es soportado para realizar peticiones http


/**
 * 
 * @param {HTMLDivElement} element 
 */
export const BrakingbadApp = async( element ) => {

  document.querySelector('#app-title').innerHTML = 'Game of Thrones';
  element.innerHTML = 'Loading...';

  // const character = await fetchCharacter();

  const characterLabel = document.createElement('blockquote');
  const houseLabel = document.createElement('h3');
  const nextQuoteButton = document.createElement('button');
  nextQuoteButton.innerText = 'Next Character';

  const renderCharacter = ( data ) => {

    characterLabel.innerHTML = data.fullName;
    houseLabel.innerHTML = data.title;
    element.replaceChildren( characterLabel, houseLabel, nextQuoteButton );

  }

  // solucion estudiante
  // nextQuoteButton.addEventListener('click', () => {
  //   element.replaceChildren( element.innerHTML = 'Loading...' );
  //   fetchCharacter()
  //   .then( renderCharacter );
  // });

  //solucion instructor
  nextQuoteButton.addEventListener('click', async() => {
    element.innerHTML = 'Loading...';
    const character = await fetchCharacter();
    renderCharacter( character );
  });

  fetchCharacter()
    //.then( (data) => renderCharacter(data) );
    // ejemeplo de caso cuando el argumento debe pasar una funcion interna se puede abreviar
    .then( renderCharacter );

}

// Peticiones http:
/* 
 Get: Obtener información
 Post: Crear información
 Put: actualizar información. Reemplazar
 Patch: actualizar información
 Delete: eliminar algo en el servidor
  Como funcionen depende del backend* 
*/

// API endpoints.