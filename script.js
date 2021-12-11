const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');

openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);

function show(){
    mainMenu.style.display = 'flex';
    mainMenu.style.visibility = 'visible'
    mainMenu.style.opacity = '1'
    mainMenu.style.top = '0';
}

function close(){
    mainMenu.style.opacity = '0'
    mainMenu.style.visibility = 'hidden'
    mainMenu.style.transition = 'all 0.3s linear'
}