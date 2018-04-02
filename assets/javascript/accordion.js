/*==================================================

  Accordion

==================================================*/

window.onload = () => {

    const accordions = document.querySelectorAll('accordion');

    const button = document.querySelector('#lul');

    accordions.forEach( el => {
        let toggle = el.childNodes[1];
        let panel = el.childNodes[3];

        if (el.hasAttribute("opened")) {
            panel.style.maxHeight = (panel.scrollHeight + 'px');
        } else {
            panel.style.maxHeight = '0';
        }

        toggle.addEventListener('click', () => {

            if (el.hasAttribute("opened")) {
                panel.style.maxHeight = '0';
                el.removeAttribute('opened');
            } else {
                panel.style.maxHeight = (panel.scrollHeight + 'px');
                el.setAttribute('opened', '');
            }

        });

        button.addEventListener('click', () => {
            console.log(el.clientHeight);
        });

    });

};