class SimulationEngine {
  constructor() {
    this.tick = 0;
  }

  advance() {
    this.tick += 1;
    return this.tick;
  }
}

export default SimulationEngine;
