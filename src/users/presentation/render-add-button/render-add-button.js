import { showModal } from '../render-modal/render-modal';
import './render-add-button.css';

/**
 * 
 * @param {HTMLDivElement} element
 */
export const renderAddButton = ( element, ) => {

  const fabButton = document.createElement('button');
  fabButton.innerText = '+';
  fabButton.classList.add('fab-button');

  element.append( fabButton );

  fabButton.addEventListener('click', ()=> {
    // Ejemplo si el boton fuse mas flexible para reuso.
    //if (!callback) return;
    //callback();
    showModal();
  });

}