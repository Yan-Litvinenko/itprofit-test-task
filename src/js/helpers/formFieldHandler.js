export const formFieldHandler = (element, regExp, errorMessage) => {
    if (!element) {
        throw new Error('Элемент не существует');
    }

    const inputHandler = () => {
        if (regExp.test(element.value)) {
            element.style.borderColor = 'green';
        } else {
            element.style.borderColor = 'red';
        }
    };

    const blurHandler = () => {
        if (!element.value.trim()) {
            element.style.borderColor = '';
        }
    };

    element.addEventListener('blur', blurHandler);
    element.addEventListener('input', inputHandler);
};
