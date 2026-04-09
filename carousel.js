const carousels = document.querySelectorAll('.carousel-container');

carousels.forEach(container => {
    const leftBtn = container.querySelector('.carousel-btn.left');
    const rightBtn = container.querySelector('.carousel-btn.right');
    const carousel = container.querySelector('.carousel');

    // Ajusta scroll según el ancho de tus tarjetas
    const scrollAmount = carousel.querySelector('.proyecto').offsetWidth + 20; // ancho + gap

    leftBtn.addEventListener('click', () => {
        carousel.scrollBy({
            left: -scrollAmount,
            behavior: 'smooth'
        });
    });

    rightBtn.addEventListener('click', () => {
        carousel.scrollBy({
            left: scrollAmount,
            behavior: 'smooth'
        });
    });
});