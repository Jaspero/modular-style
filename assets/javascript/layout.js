/*==================================================

  Layout

==================================================*/

window.onload = () => {

    const main = document.querySelector('main');
    const header = document.querySelector('header');
    const menu = document.querySelector('#menu');
    const aside = document.querySelector('aside');


    main.style.marginTop = (header.scrollHeight + 'px');

    window.onscroll = () => {
        if (window.pageYOffset > main.offsetTop) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    };

    menu.addEventListener('click', (event) => {
        aside.classList.add('active');
        event.stopPropagation();
    });

    aside.addEventListener('click', () => {
        aside.classList.remove('active');
    });

};