class KPIEngine {
  constructor() {
    this.kpis = {};
  }

  update(kpis) {
    this.kpis = { ...this.kpis, ...kpis };
    return this.kpis;
  }
}

export default KPIEngine;
