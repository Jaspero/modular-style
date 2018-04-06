/*==================================================

  Accordion

==================================================*/

window.onload = () => {

    const accordion = document.querySelectorAll('.accordion');

    accordion.forEach(el => {

        const accordionSummary = el.querySelector('.accordion_summary');

        console.log('element:', el);
        console.log('parent:', el.parentElement);

        if (el.classList.contains("active")) {
            el.style.maxHeight = (el.scrollHeight + 'px');
        } else {
            el.style.maxHeight = (accordionSummary.scrollHeight + 'px');
        }

        accordionSummary.addEventListener('click', () => {
            el.classList.toggle("active");
            if (el.classList.contains("active")) {
                setAccordionHeight(el, true);
                el.style.maxHeight = (el.scrollHeight + 'px');
            } else {
                el.style.maxHeight = (accordionSummary.scrollHeight + 'px');
                setAccordionHeight(el);
            }
        });

    });

};

function setAccordionHeight(el, remove = false) {
    let i = 0;

    while (el.parentElement) {
        if (el.parentElement.classList.contains('accordion')) {
            console.log('has parent with classList accordion');
            // el.parentElement.style.maxHeight = (parseInt(el.parentElement.style.maxHeight.replace('px', '')) + (remove ? -panel.scrollHeight : panel.scrollHeight)) + 'px';
        }

        console.log(i, ' - element:', el, 'parent:', el.parentElement);
        i++;
        el = el.parentElement;
    }

}