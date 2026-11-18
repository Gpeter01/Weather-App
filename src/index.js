import './style.css'
import { getDialogClick, openFormDialog, getCheckBoxClick } from './event.js';
import { createWelcomeBody } from './welcome.js';
import { checkStorageAvailability } from './storage.js';

const button = document.querySelector('header button');
button.addEventListener('click', openFormDialog);

const dialog = document.querySelector('dialog');
dialog.addEventListener('click', getDialogClick);

const main = document.querySelector('main');
main.addEventListener('click', getCheckBoxClick);

checkStorageAvailability();
createWelcomeBody();