export const formSubmit = (formElements) => {
    const form = document.getElementById('form');

    const handleSubmit = (event) => {
        event.preventDefault();

        const isValid = () => {
            for (let i = 0; i < formElements.length; i++) {
                if (!formElements[i].getIsValid()) {
                    formElements[i].element.style.borderColor = 'red';
                    return false;
                }
            }
            return true;
        };

        if (!isValid()) {
            return;
        }

        alert('submit');

        // fetch
    };

    form.addEventListener('submit', handleSubmit);
};
