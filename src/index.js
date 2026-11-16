import './style.css'
import { getDialogClick, openFormDialog } from './event.js';
import { createWelcomeBody } from './welcome.js';

const button = document.querySelector('header button');
button.addEventListener('click', openFormDialog);

const dialog = document.querySelector('dialog');
dialog.addEventListener('click', getDialogClick);

createWelcomeBody();