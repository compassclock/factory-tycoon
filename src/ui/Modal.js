class Modal {
  constructor(container) {
    this.container = container;
  }

  open(content = '') {
    this.container.innerHTML = `
      <div class="modal">
        <div class="modal-content">${content}</div>
      </div>
    `;
  }

  close() {
    this.container.innerHTML = '';
  }
}

export default Modal;
