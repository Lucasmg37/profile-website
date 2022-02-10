import feather from 'feather-icons';

import Page from './pages';
import Ui from './ui'; import './styles.scss';

feather.replace();

function init() {
  const page = new Page();
  const ui = new Ui(page);
}

document.addEventListener("DOMContentLoaded", init, false);

