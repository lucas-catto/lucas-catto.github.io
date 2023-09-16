document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const menuItens  = document.querySelector('.menu-itens');

    menuToggle.addEventListener('click', function () {
        menuItens.classList.toggle('active');
    })
})