class Dashboard {
  constructor(container) {
    this.container = container;
  }

  render(metrics = {}) {
    this.container.innerHTML = `
      <section class="dashboard">
        <h1>Factory Dashboard</h1>
        <p>Revenue: ${metrics.revenue ?? 0}</p>
        <p>Cash: ${metrics.cash ?? 0}</p>
      </section>
    `;
  }
}

export default Dashboard;
