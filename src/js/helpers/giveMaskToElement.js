import IMask from 'imask';

export const giveMaskToElement = (element, mask) => {
    if (!element) {
        throw new Error('Элемент не существует');
    }

    IMask(element, { mask });
};
