let images = document.querySelectorAll('.item img');
let image = document.querySelector('.item img');
let items = document.querySelectorAll('.item');
let overlay = document.querySelector('#lightBox_overlay');
let lightBoxImage = document.querySelector('#lightBox_overlay img');

items.forEach(function(item) {
    item.addEventListener('click', function() {
        overlay.classList.add('visible');
        let overlayimage = images.getAttribute('data-lightbox');
        lightBoxImage.setAttribute('src', overlayimage);
    });
});
overlay.addEventListener('click', function() {
    this.classList.remove('visible');
})