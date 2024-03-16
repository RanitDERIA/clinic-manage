const active1 = document.querySelectorAll('.faq-box-question')
const active2 = document.querySelectorAll('.faq-box-answer')

const btnChangeColor = document.querySelectorAll('.pick-box button')

const mobileNavbarOpen = document.querySelector('.mobile-hamb')
const mobileNavbarClose = document.querySelector('.mobile-navbar__close')
const navBarMenu = document.querySelector('.mobile-navbar')

function changeImages(anything) {
    document.querySelector('.pick-car img').src = anything
}

const openNav = () => {
    navBarMenu.classList.add('open-nav')
}

const closeNav = () => {
    navBarMenu.classList.remove('open-nav')
}

active1.forEach((ele, index) => {

    ele.addEventListener('click', () => {
        active2[index].classList.toggle('active-answer')
        active1[index].classList.toggle('active-question')

    })

})

btnChangeColor.forEach((element) => {
    element.addEventListener('mouseover', () => {
        btnChangeColor.forEach(ele => ele.classList.remove('colored-button'))
        element.classList.add('colored-button')
    })

    element.addEventListener('click', () => {
        const img = document.querySelector('.pick-car img')
        if (window.innerWidth < 700 || window.innerWidth == 1024) {
            img.scrollIntoView({ behavior: 'smooth' })
        }

        element.classList.add('colored-button')
    })
})

mobileNavbarOpen.addEventListener('click', () => {
    openNav()
})

mobileNavbarClose.addEventListener('click', () => {
    closeNav()
})