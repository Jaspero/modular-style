/*==================================================

  Modal

==================================================*/

window.onload = () => {

    const modals = document.querySelectorAll('modal');

    document.querySelectorAll('[opens]').forEach(el => {
        const modalEl = document.getElementById(el.getAttribute('opens'));
        el.addEventListener('click', () => {
            modalEl.classList.add('active');
        })
    });

    document.querySelectorAll('modal-overlay, [closeModal]').forEach(el => {
        el.addEventListener('click', () => {
            modals.forEach(el => {
                el.classList.remove('active');
            })
        })
    });

};