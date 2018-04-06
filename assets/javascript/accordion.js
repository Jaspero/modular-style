/*==================================================

  Accordion

==================================================*/

window.onload = () => {

    const accordion = document.querySelectorAll('.accordion');

    accordion.forEach(el => {
        const accordionSummary = el.querySelector('.accordion_summary');
        console.log(el, el.scrollHeight);
        console.log(accordionSummary, accordionSummary.scrollHeight);

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
                console.log(el.parentElement);
            } else {
                el.style.maxHeight = (accordionSummary.scrollHeight + 'px');
                setAccordionHeight(el);
            }
        });

    });

};

function setAccordionHeight(el, remove = false) {

    while (el.parentElement) {
        if (el.parentElement.classList.contains('accordion')) {
            el.parentElement.style.maxHeight = (parseInt(el.parentElement.style.maxHeight.replace('px', '')) + (remove ? -el.scrollHeight : el.scrollHeight)) + 'px';
        }
        el = el.parentElement;
    }

}