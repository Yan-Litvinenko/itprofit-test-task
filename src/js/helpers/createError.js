export const createError = (beforeElement) => {
    let isValid = true;

    const error = document.createElement('div');
    error.classList.add('form__error_message');

    const addErrorElement = () => {
        if (!beforeElement.parentNode.querySelector('.form__error_message')) {
            beforeElement.parentNode.insertBefore(error, beforeElement.nextSibling);
            error.style.display = 'block';
            isValid = false;
        }
    };

    const setErrorText = (message) => {
        error.textContent = message;
        isValid = false;
    };

    const destructionErrorElement = () => {
        error.style.display = 'none';
        if (error.parentNode) {
            error.parentNode.removeChild(error);
            isValid = true;
        }
    };

    const getIsValid = () => isValid;

    return {
        addErrorElement,
        destructionErrorElement,
        setErrorText,
        getIsValid,
    };
};
