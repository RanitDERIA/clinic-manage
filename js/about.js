const mobileNavbarOpen = document.querySelector('.mobile-lamb')
const mobileNavbarClose = document.querySelector('.mobile-navbar__close')
const navBarMenu = document.querySelector('.mobile-navbar')

const openNav = () => {
    navBarMenu.classList.add('open-nav')
}

const closeNav = () => {
    navBarMenu.classList.remove('open-nav')
}

mobileNavbarOpen.addEventListener('click', () => {
    openNav()
})

mobileNavbarClose.addEventListener('click', () => {
    closeNav()
})