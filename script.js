const hamburger = document.getElementById('hamburger-icon')
const menu = document.getElementById('menu')

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('show')
    menu.classList.toggle('show');
})
