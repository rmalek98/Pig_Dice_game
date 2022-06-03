'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelector('.btn--rule');

//open the button text function
const openModal = function() {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}
//close the button text function
const closeModal = function() {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}
//add event listener to the button to show the text
btnOpenModal.addEventListener('click', openModal);
//add event listener to the close button to close the text
btnCloseModal.addEventListener('click', closeModal ); 
//add event listener to the overlay to close the text
overlay.addEventListener('click', closeModal);

// esc key to close the text
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeModal();
    }
});