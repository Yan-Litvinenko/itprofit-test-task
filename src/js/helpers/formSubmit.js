import { customFetch } from './customFetch';

const transformFormValue = (formElements) => {
    return formElements.reduce((acc, field) => {
        acc[field.element.id] = field.element.value;
        return acc;
    }, {});
};

const isValid = (formElements) => {
    for (let i = 0; i < formElements.length; i++) {
        if (!formElements[i].getIsValid()) {
            formElements[i].element.style.borderColor = 'red';
            return false;
        }
    }
    return true;
};

export const formSubmit = (formElements) => {
    const form = document.getElementById('form');

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!isValid(formElements)) return;

        const response = await customFetch(
            JSON.stringify(transformFormValue(formElements)),
            'http://localhost:9090/api/registration',
        );

        if (response.status === 'success') {
            alert('Усешно отправлено');
        } else {
            alert(`Ошибка:${JSON.stringify(response)}`);
        }
    };

    form.addEventListener('submit', handleSubmit);
};
