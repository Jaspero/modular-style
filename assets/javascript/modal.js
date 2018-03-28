/*==================================================

  Modal

==================================================*/

window.onload = () => {

    const modals = document.querySelectorAll('modal');

    document.querySelectorAll('[opens]').forEach(el => {
        const modalEl = document.getElementById(el.getAttribute('opens'));
        el.addEventListener('click', () => {
            modalEl.classList.add('active');
            const modalHeaderEl = modalEl.querySelector('modal-header').scrollHeight;
            const modalFooterEl = modalEl.querySelector('modal-footer').scrollHeight;
            const modalBodyEl = modalEl.querySelector('modal-body');
            modalBodyEl.style.maxHeight = ('calc(100vh - 4rem - ' + (modalHeaderEl + modalFooterEl) + 'px)');
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