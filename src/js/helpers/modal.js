export const modal = () => {
    const modal = document.getElementById('modal');
    const cross = document.getElementById('modal-cross');
    const btn = document.getElementById('modal-btn');
    const btnOpen = document.getElementById('open-modal');

    const toggleModal = () => {
        modal.classList.toggle('modal_active');
    };

    const closeModalOnOutsideClick = (event) => {
        if (event.target === modal) {
            toggleModal();
        }
    };

    btn.addEventListener('click', toggleModal);
    btnOpen.addEventListener('click', toggleModal);
    cross.addEventListener('click', toggleModal);
    modal.addEventListener('click', closeModalOnOutsideClick);
};
