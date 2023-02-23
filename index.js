const navbar = document.querySelector('.navbar-right')
const menu = document.querySelector('.open')
const cross = document.querySelector('.close');
const body = document.querySelector('body');
// const reload_page = document.querySelector('.logo');


function openNav(){
    navbar.style.display = "flex"
    body.style.overflow = 'hidden';
}

function closeNav(){
    navbar.style = "display:none";
    body.style.overflow = 'auto';

}

// function reload(){
//     reload_page.window.location.reload(true)
// }

menu.addEventListener('click', openNav);
cross.addEventListener('click', closeNav)
// reload_page.addEventListener('click', reload)
