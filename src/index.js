import feather from 'feather-icons';

import Page from './pages';
import Ui from './ui'; import './styles.scss';
import Intro from './intro';

feather.replace();

function init() {
  const page = new Page();
  new Ui(page);
  new Intro(page);
}

document.addEventListener("DOMContentLoaded", init, false);

