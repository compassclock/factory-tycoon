"use strict";

export const Investments = [

{
    id:1,

    department:"Human Resources",

    icon:"🎓",

    title:"Employee Training",

    description:
    "Upskill assembly operators and supervisors.",

    cost:10,

    roi:5,

    risk:"Low",

    color:"#00C853",

    effects:{

        production:5,

        quality:8,

        morale:15,

        customer:4,

        innovation:3

    }

},

{

    id:2,

    department:"Maintenance",

    icon:"⚙",

    title:"Preventive Maintenance",

    description:
    "Reduce machine breakdowns.",

    cost:15,

    roi:4,

    risk:"Medium",

    color:"#2196F3",

    effects:{

        production:8,

        oee:12,

        maintenance:15,

        quality:4

    }

},

{

    id:3,

    department:"Production",

    icon:"🤖",

    title:"Factory Automation",

    description:
    "Introduce robotics.",

    cost:30,

    roi:5,

    risk:"High",

    color:"#FF9800",

    effects:{

        production:20,

        quality:6,

        morale:-8,
        innovation:10

    }

}

];
