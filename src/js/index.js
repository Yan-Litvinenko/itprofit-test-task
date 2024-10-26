import '../css/index.scss';
import { giveMaskToElement } from './helpers/giveMaskToElement';

const phone = document.getElementById('phone');

giveMaskToElement(phone, '+{7} (000) 000-00-00');
