/*==================================================

  Modal

==================================================*/

window.onload = () => {

    /*
     * Get elements with attribute 'data-open-modal'.
     */
    const modalOpen = document.querySelectorAll('[data-open-modal]');

    modalOpen.forEach(el => {

        /*
         * Match 'data-open-modal' attribute value with div 'id' value.
         * Clicking on an element with 'data-open-modal' opens correlating
         * modal by giving it 'active' class.
         * Also adds 'modal-opened' class on html to disable background
         * scrolling.
         */
        const modalEl = document.getElementById(el.getAttribute('data-open-modal'));

        el.addEventListener('click', () => {
            modalEl.classList.add('active');
            document.documentElement.classList.add('modal-opened');

            /*
             * Clicking on modal overlay or any element with
             * '[data-close-modal]' attribute closes the modal.
             */
            let modalContent = modalEl.querySelector('.modal-content');
            let modalClose = modalEl.querySelectorAll('[data-close-modal]');

            modalContent.addEventListener('click', (event) => {
                event.stopPropagation();
            });
            modalEl.addEventListener('click', () => {
                modalEl.classList.remove('active');
                document.documentElement.classList.remove('modal-opened');
            });
            modalClose.forEach(el => {
                el.addEventListener('click', () => {
                    modalEl.classList.remove('active');
                    document.documentElement.classList.remove('modal-opened');
                });
            });

            /*
             * Prevent modal from being larger than screen size.
             * Otherwise this would happen if header of footer are too big,
             * and modal-body doesn't have a set max-height.
             */
            let modalHeaderEl = modalEl.querySelector('.modal-header').scrollHeight;
            let modalFooterEl = modalEl.querySelector('.modal-footer').scrollHeight;
            let modalBodyEl = modalEl.querySelector('.modal-body');
            modalBodyEl.style.maxHeight = ('calc(100vh - 4rem - ' + (modalHeaderEl + modalFooterEl) + 'px)');

            /*
             * In case of a form, set focus to an element with 'tabindex="1"'
             */
            modalEl.querySelector('[tabindex="1"]').focus();

        });

    });

};