export const formSubmit = (formElements) => {
    let isValid = true;
    const form = document.getElementById('form');

    const handleSubmit = (event) => {
        event.preventDefault();

        for (let i = 0; i < formElements.length; i++) {
            if (!formElements[i].getIsValid()) {
                formElements[i].element.style.borderColor = 'red';
                isValid = false;
                break;
            }
        }

        if (!isValid) {
            return;
        }

        alert('submit');

        // fetch
    };

    form.addEventListener('submit', handleSubmit);
};
