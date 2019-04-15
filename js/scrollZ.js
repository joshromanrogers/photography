// window.addEventListener('scroll', () => {
//     let y = 1 + (window.scrollY || window.pageYOffset);
//     y = y < 1 ? 1 : y // ensure y is always >= 1 (due to Safari's elastic scroll)
//     console.log(y);
// //     const [rY, gY, bY] = [redY/y, greenY/y, blueY/y].map(Math.round)
// //    body.style.backgroundColor = `rgb(${rY}, ${gY}, ${bY})`
//   })

// let viewContent = document.querySelector('.viewContent');

// window.addEventListener('scroll', (event) => {
//     let y = 1 + (window.scrollY || window.pageYOffset);
//     // let y = (window.scrollY / 100) + 1;
//     y = y < 1 ? 1 : y // ensure y is always >= 1 (due to Safari's elastic scroll)
//     console.log(y);
//     // viewContent.style.transform = 'scale(' + y + ')';
//     viewContent.style.transform = `translate3d(0px, 0px, ${y}px`;
// })