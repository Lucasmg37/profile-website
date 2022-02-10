
class Ui {

  constructor(page) {

    this.page = page;

    // Footer
    this.footer = document.querySelector('footer');
    this.buttonFooterClose = this.footer.getElementsByClassName('closeFooter')[0].getElementsByTagName('button')[0];
    this.buttonMenu = document.getElementsByClassName('nav--burguer')[0];
    this.init();

    // Footer Navigator
    this.navList = document.getElementsByClassName('nav--list')[0];
    this.tabs = this.page.getPages();

    this.renderNavigator();
  }

  goToPage(pageIndex) {
    this.closeMenu();
    this.page.goToPage(pageIndex);
  }

  renderNavigator() {

    this.tabs.map((tab) => {
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.innerHTML = tab.name;

      a.addEventListener('click', () => this.goToPage(tab.index));
      li.appendChild(a);

      this.navList.appendChild(li);
    })

  }

  openMenu() {
    this.footer.classList.add('footer--open');
    document.getElementsByTagName('body')[0].style.overflowY = 'hidden';
  }

  closeMenu() {
    this.footer.classList.remove('footer--open');
    document.getElementsByTagName('body')[0].style.overflowY = 'auto';
  }

  init() {
    this.buttonMenu.addEventListener('click', this.openMenu.bind(this));
    this.buttonFooterClose.addEventListener('click', this.closeMenu.bind(this));
  }

}


export default Ui;