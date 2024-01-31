const navbar = document.querySelector('.custom-header')
const openBtn = document.querySelector('.navbar-open')

openBtn.addEventListener('click', (event) => {
    navbar.classList.toggle('open')
})

// Ubed JS for Nav Toggle