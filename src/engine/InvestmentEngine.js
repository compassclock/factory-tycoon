class InvestmentEngine {
  constructor() {
    this.portfolio = [];
  }

  addInvestment(investment) {
    this.portfolio.push(investment);
    return this.portfolio;
  }
}

export default InvestmentEngine;
