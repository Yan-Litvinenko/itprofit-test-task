import { createError } from './createError';

export const formFieldHandler = (element, regExp, errorMessage) => {
    if (!element) {
        throw new Error('Элемент не существует');
    }

    const { destructionErrorElement, setErrorText, addErrorElement, getIsValid } = createError(element);

    const inputHandler = () => {
        if (regExp.test(element.value)) {
            element.style.borderColor = 'green';
            destructionErrorElement();
        } else {
            element.style.borderColor = 'red';
            setErrorText(errorMessage);
            addErrorElement();
        }
    };

    const blurHandler = () => {
        if (!element.value.trim()) {
            element.style.borderColor = '';
        }
    };

    element.addEventListener('blur', blurHandler);
    element.addEventListener('input', inputHandler);

    return {
        element,
        getIsValid,
    };
};
