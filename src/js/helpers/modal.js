export const modal = () => {
    const modal = document.getElementById('modal');
    const cross = document.getElementById('modal-cross');
    const btn = document.getElementById('modal-btn');

    const toggleModal = () => {
        modal.classList.toggle('modal_active');
    };

    const closeModalOnOutsideClick = (event) => {
        if (event.target === modal) {
            toggleModal();
        }
    };

    cross.addEventListener('click', toggleModal);
    btn.addEventListener('click', toggleModal);
    modal.addEventListener('click', closeModalOnOutsideClick);
};
