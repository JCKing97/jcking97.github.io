// Intros to place in the snippet at the top right of the page
let shortIntros = [
    "Graduate Software Engineer at The Science & Technology Facilities Council",
    "1st Class (Hons) in Computer Science from Royal Holloway, University of London"
];

// Set up for interval change
let i = 0;
document.getElementById("short-intro-text").textContent = shortIntros[i];

// At the interval change to the next short intro
let interval = setInterval(function(){
    i = (i + 1) % shortIntros.length;
    document.getElementById("short-intro-text").textContent = shortIntros[i];
}, 5000);
