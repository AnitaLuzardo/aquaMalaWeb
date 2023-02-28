const btnMenu = document.querySelector('#btn_menu');
const menu = document.querySelector('#menu');

btnMenu.addEventListener('click', () => {
    menu.classList.toggle('menu-on');
})