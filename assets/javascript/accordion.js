/*==================================================

  Accordion

==================================================*/

window.onload = () => {

  const accordions = document.querySelectorAll('accordion');

  const button = document.querySelector('#lul');

  accordions.forEach( el => {
    let toggle = el.querySelector('accordion-toggle');
    let panel = el.querySelector('accordion-panel');

    if (el.hasAttribute("opened")) {
      panel.style.maxHeight = (panel.scrollHeight + 'px');
    } else {
      panel.style.maxHeight = '0';
    }

    toggle.addEventListener('click', () => {
      if (el.hasAttribute("opened")) {

        setAccordionsHeight(panel, true);
        panel.style.maxHeight = '0';

        el.removeAttribute('opened');
      } else {
        panel.style.maxHeight = (panel.scrollHeight + 'px');

        setAccordionsHeight(panel);
        el.setAttribute('opened', '');
      }

    });
  });

};

function setAccordionsHeight(panel, remove = false) {
  let el = panel;

  while (el.parentElement) {
    if (el.parentElement.nodeName === 'ACCORDION-PANEL') {
      el.parentElement.style.maxHeight = (parseInt(el.parentElement.style.maxHeight.replace('px', '')) + (remove ? -panel.scrollHeight : panel.scrollHeight)) + 'px';
    }
    el = el.parentElement;
  }
}