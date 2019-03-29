let body = document.getElementsByTagName('BODY')[0];
let html = document.getElementsByTagName('HTML')[0];

// var height = Math.max( body.scrollHeight, body.offsetHeight, 
//     html.clientHeight, html.scrollHeight, html.offsetHeight );

//     console.log(body.scrollHeight);

let viewContent = document.querySelector('#content');

window.addEventListener('scroll', (event) => {
    // let y = 1 + (window.scrollY || window.pageYOffset);
    let y = (window.scrollY / (body.scrollHeight - window.innerHeight) * 120);
    console.log(window.scrollY, body.scrollHeight, window.innerHeight)
    y = y < 1 ? 1 : y // ensure y is always >= 1 (due to Safari's elastic scroll)
    console.log(y);
    viewContent.style.transform = 'scale(' + y + ')';
    // viewContent.style.transform = `translate3d(0px, 0px, ${y}px`;
})