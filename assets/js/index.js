const burger = document.querySelector('#burger')
const closeMenu = document.querySelector('#closeMenu')
const menu = document.querySelector('#menu')

burger.addEventListener('click', () => {
    if(menu.classList.contains('hidden')) {
        menu.classList.remove('hidden')
    } else {
        menu.classList.add('hidden')
    }
})

closeMenu.addEventListener('click', () => {
    if(menu.classList.contains('hidden')) {
        menu.classList.remove('hidden')
    } else {
        menu.classList.add('hidden')
    }
})