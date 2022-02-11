class Page {

  constructor() {
    this.scrollElement = document.getElementsByClassName('scroll')[0];

    this.pages = [
      {
        index: 1,
        min: 0,
        max: 9,
        name: 'Início',
        element: null,
      },
      {
        index: 2,
        min: 10,
        max: 40,
        name: 'Sobre',
        element: document.getElementById('page-2'),
      },
      {
        index: 3,
        min: 67,
        max: 100,
        name: 'Experiências',
        element: document.getElementById('page-3'),
      },
      {
        index: 4,
        min: 100,
        max: 100,
        name: 'Portifólio',
        element: null,
      },
      {
        index: 5,
        min: 100,
        max: 100,
        name: 'Contatos',
        element: null,
      },
    ];

    this.init();
  }

  getPages() {
    return this.pages;
  }

  closeAllPages() {
    this.pages.map(page => {
      if (page.element) {
        page.element.style.top = '100vh';
      }
    })
  }

  goToPage(pageIndex) {
    this.closeAllPages();

    this.pages.map(page => {
      if (page.element && page.index <= pageIndex) {
        page.element.style.top = 0 + 'px';
      }
    })

    const page = this.pages.find(page => page.index === pageIndex);
    const top = this.getPositionByPercentage(page.max);
    window.scrollTo(0, top);
  }

  getPositionByPercentage(percent) {
    const height = this.scrollElement.clientHeight - window.innerHeight;
    const position = height * percent / 100;
    return position;
  }

  getRelativePercentage(percent, min, max) {

    const diff = max - min;
    const check = max - percent;

    return 100 - ((check / diff) * 100);
  }

  getElements(pages) {
    return pages.map(page => {
      page.element = document.getElementById(page.name);
      return page
    })
  }

  calcPosition() {

    const height = this.scrollElement.clientHeight - window.innerHeight;

    const percent = (window.scrollY / height * 100);
    const hiddenTop = window.innerHeight;

    //page 1
    if (percent < 33) {
      this.pages[1].element.style.top = hiddenTop + 'px';
    }

    this.pages.map((page) => {

      if (!page.element) {
        return;
      }

      if (percent >= page.min && percent <= page.max) {
        const relativePercent = this.getRelativePercentage(percent, page.min, page.max);

        if (relativePercent > 30) {
          page.element.style.top = 0 + 'px';
        } else {
          page.element.style.top = 100 - relativePercent + 'vh';
        }
      } else if (percent < page.min) {
        page.element.style.top = hiddenTop + 'px';
      }
    })
  }

  init() {
    window.addEventListener('scroll', (e) => {
      this.calcPosition()
    })
  }
}

export default Page;