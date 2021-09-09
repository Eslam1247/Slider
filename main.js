const carouselslide = document.querySelector('.carousel-slide')
const carouselimage = document.querySelectorAll('.carousel-slide img')

// buttons
var prevBtn = document.getElementById('prevBtn')
var nextBtn = document.getElementById('nextBtn')
    // counter
let counter = 1;
const size = carouselimage[0].clientWidth;

carouselslide.style.transform = 'translateX(' + (-size * counter) + 'px)'
    // buttons listen
nextBtn.addEventListener("click", () => {
    if (counter >= carouselimage.length - 1) return;
    carouselslide.style.transition = 'transform 1s ease-in-out';
    counter++;
    carouselslide.style.transform = 'translateX(' + (-size * counter) + 'px)'
});
prevBtn.addEventListener("click", () => {
    if (counter <= 0) return;
    carouselslide.style.transition = 'transform 0.4s ease-in-out';
    counter--;
    carouselslide.style.transform = 'translateX(' + (-size * counter) + 'px)'
});
carouselslide.addEventListener("transitionend", () => {
    if (carouselimage[counter].id == 'lastClone') {
        carouselslide.style.transform = "none";
        counter = carouselimage.length - 2;
        carouselslide.style.transform = 'translateX(' + (-size * counter) + 'px)';

    }
    if (carouselimage[counter].id == 'firstClone') {
        carouselslide.style.transform = "none";
        counter = carouselimage.length - counter;
        carouselslide.style.transform = 'translateX(' + (-size * counter) + 'px)';

    }
})