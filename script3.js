// Sélectionnez les boîtes et le modal
const boxes = document.querySelectorAll('.box');
const modal = document.querySelector('.modal');
const modalContent = document.querySelector('.modal-content');
const closeButton = document.querySelector('.close');
const slides = document.querySelector('.slides');

// Ajoutez un écouteur d'événement pour chaque boîte
boxes.forEach(box => {
    box.addEventListener('click', () => {
        // Récupérez les images associées à la boîte
        const images = box.dataset.images.split(',');

        // Créez les images et ajoutez-les au modal
        slides.innerHTML = '';
        images.forEach(src => {
            const img = document.createElement('img');
            img.src = src;
            slides.appendChild(img);
        });

        // Affichez le modal
        modal.style.display = 'block';
    });
});

// Ajoutez un écouteur d'événement pour le bouton de fermeture
closeButton.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Ajoutez un écouteur d'événement pour cliquer en dehors du modal
window.addEventListener('click', event => {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
});