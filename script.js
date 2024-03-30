let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-container');
let formBtn = document.querySelector('#login-btn');
let loginForm = document.querySelector('.login-form-container');
let formClose = document.querySelector('#form-close');
let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
let videoBtn = document.querySelectorAll('.vid-btn');
let videoSlider = document.querySelector('#video-slider');

let currentVideoIndex = 0; // Track the currently active video



window.onscroll = () => {
    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active');
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    loginForm.classList.remove('active');
}

menu.addEventListener('click', () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});

searchBtn.addEventListener('click', () => {
    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');
});

formBtn.addEventListener('click', () => {
    loginForm.classList.add('active');
});

formClose.addEventListener('click', () => {
    loginForm.classList.remove('active');
});

// Function to switch to the next video
function switchToNextVideo() {
    videoBtn[currentVideoIndex].classList.remove('active'); // Remove the active class from the current button
    currentVideoIndex = (currentVideoIndex + 1) % videoBtn.length; // Calculate the next video index
    videoBtn[currentVideoIndex].classList.add('active'); // Add the active class to the new button
    let src = videoBtn[currentVideoIndex].getAttribute('data-src');
    videoSlider.src = src; // Update the video source
}

// Set an interval to switch videos every 5 seconds (5000 milliseconds)
setInterval(switchToNextVideo, 5000);

// Initial setup to start the video slider
videoBtn[currentVideoIndex].classList.add('active');
videoSlider.src = videoBtn[currentVideoIndex].getAttribute('data-src');

function handleVideoButtonClick(index) {
    // Remove the active class from the current button
    videoBtn[currentVideoIndex].classList.remove('active');
    currentVideoIndex = index; // Set the current video index to the clicked button's index
    videoBtn[currentVideoIndex].classList.add('active'); // Add the active class to the clicked button
    let src = videoBtn[currentVideoIndex].getAttribute('data-src');
    videoSlider.src = src; // Update the video source
}

// Add click event listeners to each video button
videoBtn.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        handleVideoButtonClick(index);
    });
});

var swiper = new Swiper(".review-slider", {
    spaceBetween: 20, 
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        }
    }
});