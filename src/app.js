import { Company }
from "./data/company.js";

import DashboardEngine
from "./engine/DashboardEngine.js";

const dashboard =
new DashboardEngine(Company);

dashboard.render();
