const menuToggler=document.querySelector('.menu-toggler');
const navbar=document.querySelector('.navbar');
const collapsiblemenu=document.querySelector('.collapsiblemenu');

menuToggler.addEventListener('click', () => {
    navbar.classList.toggle('show-menu');
    if(navbar.classList.contains('show-menu')){
        collapsiblemenu.style.maxHeight = collapsiblemenu.scrollHeight + 'px';
        setTimeout( () => {
            collapsiblemenu.style.overflow = 'visible';
        }, 300)
    }else{
        collapsiblemenu.style.maxHeight = '0px';
        collapsiblemenu.style.overflow = 'hidden';
    }
    
});

