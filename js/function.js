// Menu
const menu = document.getElementById('menu');
const sidenav = document.getElementById('sidenav');
menu.addEventListener('click', function(e) {
    sidenav.classList.toggle('sidenav--active');
    e.preventDefault();   
});
// Search
const search = document.getElementById('icon__search');
const searchBar = document.getElementById('search-bar');
const searchBox = document.getElementById('search-box');
search.addEventListener('click', function() {
    searchBar.classList.toggle('search-bar--active');
    searchBox.classList.toggle('search-box--active');
});