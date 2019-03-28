const [red, green, blue] = [69, 111, 225]

window.addEventListener('scroll', () => {
  let y = 1 + (window.scrollY || window.pageYOffset) / 150
  y = y < 1 ? 1 : y // ensure y is always >= 1 (due to Safari's elastic scroll)
  const [r, g, b] = [red/y, green/y, blue/y].map(Math.round)
 body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
})