// Menu
const menu = document.getElementById('menu');
const sideNav = document.getElementById('sidenav');

menu.addEventListener('click', function() {
    sideNav.classList.toggle('sidenav--expanded');
})