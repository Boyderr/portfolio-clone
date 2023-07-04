// Main menu 

const openBtn = document.querySelector('.js-menu-open');
const closeBtn = document.querySelector('.js-menu-close');
const menu = document.querySelector('.menu-opened');

// hide menu when the page loads
menu.style.display = 'none';

// display menu when open button is clicked
openBtn.addEventListener('click', function (event) {
    event.preventDefault();
    menu.style.display = 'flex';
});

// hide menu when close button is clicked
closeBtn.addEventListener('click', function (event) {
    event.preventDefault();
    menu.style.display = 'none';
});



// Smooth scroll to top button

// Fade-in button on scroll and smooth scroll to top
$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.return-top').fadeIn();
        } else {
            $('.return-top').fadeOut();
        }
    });
    $('.return-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 800);
        return false;
    });
});


// Carousel buttons 

// Retrieve all carousel elements
const carousels = document.querySelectorAll('.carousel');

// Loop through each carousel element
carousels.forEach(carousel => {
    const scrollContainer = carousel.querySelector('.carousel__images-container');
    const scrollButtonLeft = carousel.querySelector('.carousel__scroll-button--left');
    const scrollButtonRight = carousel.querySelector('.carousel__scroll-button--right');

    scrollButtonLeft.addEventListener('click', () => {
        scrollContainer.scrollBy({ left: -200, behavior: 'smooth' });
    });

    scrollButtonRight.addEventListener('click', () => {
        scrollContainer.scrollBy({ left: 200, behavior: 'smooth' });
    });
});



// Video Player

var video = document.querySelector('.video');
var timeBarColor = document.querySelector('.time-bar-color');
var vidBtn = document.getElementById('js-play-pause');

var isVideoVisible = false;

// Create a new Intersection Observer
var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
        if (entry.intersectionRatio > 0) {
            // Video is visible
            isVideoVisible = true;
            vidBtn.classList.add('pause');
            video.play();
        } else {
            // Video is not visible
            isVideoVisible = false;
            vidBtn.classList.remove('pause');
            video.pause();
        }
    });
});

// Start observing the video element
observer.observe(video);

// Toggle play/pause when the button is clicked
vidBtn.addEventListener('click', function () {
    if (isVideoVisible) {
        if (video.paused) {
            vidBtn.classList.add('pause');
            video.play();
        } else {
            vidBtn.classList.remove('pause');
            video.pause();
        }
    }
});


// Move the timebar based on video's duration

video.addEventListener('timeupdate', function () {
    var timeBarColorPos = video.currentTime / video.duration;
    timeBarColor.style.width = timeBarColorPos * 100 + "%";

})
