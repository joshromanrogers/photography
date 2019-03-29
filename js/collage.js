const images = ['imgs/photography/music/music1.jpg', 'imgs/photography/music/music2.jpg',
    'imgs/photography/music/music3.jpg', 'imgs/photography/music/music4.jpg',
    'imgs/photography/music/music5.jpg', 'imgs/photography/music/music6.jpg', 'imgs/photography/music/music7.jpg',
    'imgs/photography/music/music8.jpg', 'imgs/photography/music/music9.jpg'
];

let collageBody = document.querySelector('.collage-body');
let backButton = document.querySelector('.movBack');

let i = 0;

const placeImage = (x, y) => {

    const nextImage = images[i];

    // create img element, 
    // set the src as an img in the images array,
    // give top left coords based on x and y input values
    const img = document.createElement("img")
    img.setAttribute("src", nextImage);
    img.classList.add("collage-img");
    img.style.left = (x / 10) + '%';
    img.style.top = (y / 10) + '%';
    img.style.transform = `translate(-50%, -50%) scale(${Math.random() * 0.1 + 0.2}) rotate(${Math.random() * 20 - 10}deg)`;

    // add to page
    collageBody.appendChild(img);

    i = i + 1;

    // loop back to first image when the end of images array reached
    if (i >= images.length) {
        i = 0;
    }

}


// override collage function preventDefault() and take user back to homepage
backButton.addEventListener('click', (event) => {
    window.location.href = "index.html";
})

let tap = document.querySelector('.tap');
// when user clicks, add image based on event/cursor xy position
document.addEventListener('click', (event) => {
    event.preventDefault();
    tap.style.display = "none";
    placeImage(event.pageX, event.pageY);
    console.log('click');
})

// same as above, but for mobile
document.addEventListener('touchend', (event) => {
    event.preventDefault();
    placeImage(event.pageX, event.pageY);
})



