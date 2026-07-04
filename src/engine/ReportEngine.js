class ReportEngine {
  constructor() {
    this.reports = [];
  }

  generateReport(data) {
    const report = {
      id: this.reports.length + 1,
      data,
    };

    this.reports.push(report);
    return report;
  }
}

export default ReportEngine;
