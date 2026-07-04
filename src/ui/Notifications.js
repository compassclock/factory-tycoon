class Notifications {
  constructor(container) {
    this.container = container;
  }

  show(message) {
    const item = document.createElement('div');
    item.className = 'notification';
    item.textContent = message;
    this.container.appendChild(item);
  }
}

export default Notifications;
