class FinanceEngine {
  constructor() {
    this.cash = 0;
    this.revenue = 0;
    this.expenses = 0;
  }

  recordTransaction({ amount, type }) {
    if (type === 'income') {
      this.revenue += amount;
      this.cash += amount;
    } else if (type === 'expense') {
      this.expenses += amount;
      this.cash -= amount;
    }

    return { cash: this.cash, revenue: this.revenue, expenses: this.expenses };
  }
}

export default FinanceEngine;
