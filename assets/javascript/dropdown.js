/*==================================================

  Dropdown

==================================================*/

window.onload = () => {

    const dropdownToggle = document.querySelectorAll('dropdown-toggle');
    const dropdowns = document.querySelectorAll('dropdown');

    dropdownToggle.forEach(el => {
        el.addEventListener('click', (event) => {
            dropdowns.forEach(el => {
                el.classList.remove('active');
            });
            el.parentElement.classList.add('active');
            event.stopPropagation();
        });
    });

    window.addEventListener('click', () => {
        dropdowns.forEach(el => {
            el.classList.remove('active');
        });
    });

};