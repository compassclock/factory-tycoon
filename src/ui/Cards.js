class Cards {
  constructor(container) {
    this.container = container;
  }

  render(items = []) {
    this.container.innerHTML = items
      .map((item) => `<div class="card">${item}</div>`)
      .join('');
  }
}

export default Cards;
