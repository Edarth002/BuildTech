// scripts.js
document.addEventListener("DOMContentLoaded", function () {
    // Get the target elements
    var element1 = document.getElementById('typewriter-text');
    var element2 = document.getElementById('typewriter-text2');

    // Set the initial text content
    var originalText1 = "What's Build Tech Mata?";
    var originalText2 = "we envision, create, and manage cutting-edge software solutions, propelling businesses toward unprecedented heights of success. Join us Build Tech Mata.";

    // Call the typewriter function for the first element
    typewriterEffect(element1, originalText1);

    // Call the typewriter function for the second element
    typewriterEffect(element2, originalText2);
});

function typewriterEffect(element, text) {
    // Split the text into characters
    var characters = text.split('');
    // Initialize an empty string to build the typed text
    var typedText = '';

    // Loop through each character
    characters.forEach(function (char, index) {
        // Use a timeout to add each character with a delay
        setTimeout(function () {
            typedText += char;
            element.innerHTML = typedText;
        }, 70 * index); // Adjust the delay (100ms in this example)
    });
}
// When the page has fully loaded
document.addEventListener('DOMContentLoaded', function () {
    // Simulate a delay (you can replace this with your actual loading mechanism)
    setTimeout(function () {
        // Show the video container and hide the loading state
        var videoContainer = document.getElementById('video-container');
        var loadingState = document.getElementById('loading-state');
        videoContainer.classList.remove('hidden');
        loadingState.style.display = 'none';

        // Lazy-load the iframe by setting the src attribute from the data-src attribute
        var youtubeVideo = document.getElementById('youtube-video');
        // youtubeVideo.src = youtubeVideo.getAttribute('data-src');

        // Add an event listener to hide the loading state when the iframe has finished loading
        youtubeVideo.addEventListener('load', function () {
            loadingState.style.display = 'none';
        });
    }, 2000); // Change the timeout value as needed
});