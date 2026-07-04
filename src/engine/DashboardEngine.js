class DashboardEngine {
  constructor() {
    this.metrics = {};
  }

  update(metrics) {
    this.metrics = { ...this.metrics, ...metrics };
    return this.metrics;
  }
}

export default DashboardEngine;
