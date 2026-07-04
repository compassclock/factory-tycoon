"use strict";

import gameState from "../core/GameState.js";
import { animateNumber } from "../utils/Animator.js";

export default class DashboardEngine {

    constructor(company){

        this.company = company;

        gameState.subscribe(()=>{

            this.updateBudgetWidget();

        });

    }

    render(){

        const dashboard =
            document.getElementById("dashboard");

        dashboard.innerHTML = "";

        dashboard.appendChild(
            this.createCompanyCard()
        );

        dashboard.appendChild(
            this.createFinancialCards()
        );

        dashboard.appendChild(
            this.createKPICards()
        );

    }

    createCompanyCard(){

        const card = document.createElement("section");

        card.className = "company-card";

        card.innerHTML = `

        <h1>${this.company.name}</h1>

        <p>

        Annual Capacity :

        ${this.company.plant.annualCapacity.toLocaleString()} Vehicles

        </p>

        <p>

        Employees :

        ${this.company.plant.employees}

        </p>

        <p>

        Month :

        ${this.company.plant.currentMonth}

        </p>

        `;

        return card;

    }

    createFinancialCards(){

        const wrapper = document.createElement("section");

        wrapper.className = "financial-grid";

        const cards = [

            {
                title:"Revenue",
                value:`₹ ${this.company.financials.revenue} Cr`
            },

            {
                title:"Profit",
                value:`₹ ${this.company.financials.profit} Cr`
            },

            {
                title:"Budget",
                value:this.company.financials.budget,
                type:"number"
            },

            {
                title:"Company Value",
                value:`₹ ${this.company.financials.companyValue} Cr`
            }

        ];

        cards.forEach(card=>{

            const div=document.createElement("div");

            div.className="financial-card";

            div.innerHTML=`

            <h3>${card.title}</h3>

            <h2 class="financial-value${card.type === "number" ? " budget-value" : ""}">${card.value}</h2>

            `;

            wrapper.appendChild(div);

            if(card.type === "number"){

                const valueElement = div.querySelector(".financial-value");

                animateNumber(valueElement, 0, card.value, 600);

            }

        });

        return wrapper;

    }

    updateBudgetWidget(){

        const budgetElement = document.querySelector(".budget-value");

        if(!budgetElement){

            return;

        }

        const currentValue = parseInt(budgetElement.textContent, 10) || 0;

        animateNumber(

            budgetElement,

            currentValue,

            this.company.financials.budget,

            600

        );

    }

    createKPICards(){

        const grid=document.createElement("section");

        grid.className="kpi-grid";

        Object.entries(this.company.kpis)

        .forEach(([name,value])=>{

            const card=document.createElement("div");

            card.className="kpi-card";

            card.innerHTML=`

            <h4>

            ${name.toUpperCase()}

            </h4>

            <div class="progress">

                <div
                    class="progress-fill"
                    style="width:${value}%">

                </div>

            </div>

            <h2>${value}%</h2>

            `;

            grid.appendChild(card);

        });

        return grid;

    }

}
