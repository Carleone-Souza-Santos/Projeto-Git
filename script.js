document.addEventListener('DOMContentLoaded', function () {

    let carousel = document.getElementById('carousel');
    let images = carousel.getElementsByTagName('img');
    let currentIndex = 0;
    
    function showNextImage() {
      
        images[currentIndex].classList.remove('visible');  
        currentIndex = (currentIndex + 1) % images.length;    
        images[currentIndex].classList.add('visible');
    }
    let intervalId = setInterval(showNextImage, 5000);
});