import IMask from 'imask';

export const giveMaskToElement = (element, mask) => {
    if (element) {
        IMask(element, { mask });
    }
};
