import { formFieldHandler } from './helpers/formFieldHandler';
import { giveMaskToElement } from './helpers/giveMaskToElement';
import '../css/index.scss';

const name = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const message = document.getElementById('message');

giveMaskToElement(phone, '+{7} (000) 000-00-00');

formFieldHandler(name, /^[a-zA-Zа-яА-ЯёЁ]+$/, 'Имя может содержать только кирилицу или буквы латинского алфавита');
formFieldHandler(email, /\w+@[a-z]{2,}\.[a-z]{2,}/, 'Неверный формат');
formFieldHandler(phone, /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/, 'Неверный формат');
formFieldHandler(
    message,
    /^[a-zA-Zа-яА-ЯёЁ0-9 .,?!\n]{10,}$/,
    'Сообщение не может быть короче 10 символов. Может содержать только буквы, цифры и знаки препинания',
);
