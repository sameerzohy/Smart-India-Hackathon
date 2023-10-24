const navbar = document.querySelector('#open-nav');
const cl_nav = document.querySelector('#close-nav')
const clicknav = document.querySelector('.click-nav');

function openNav(e){

    clicknav.style.right = '0px';
}

function closeNav(e){
    clicknav.style.right = '-500px';

}

navbar.addEventListener('click', openNav);
cl_nav.addEventListener('click', closeNav);