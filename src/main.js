import App from './app.js';
import { getItem } from './utils/storage.js';

const initialState = getItem('todos', []);

const $app = document.querySelector('.app');

new App({
  $target: $app,
  initialState,
});
