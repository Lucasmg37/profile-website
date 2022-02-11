class Intro {
  constructor(page) {
    this.page = page;
    this.addListeners();
  }

  addListeners() {
    const button = document.getElementById('page-button--portifolio');

    button.addEventListener('click', (e) => {
      e.preventDefault();
      this.page.goToPage(3);
    });
  }

}

export default Intro;