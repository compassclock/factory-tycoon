"use strict";

import gameState from "../core/GameState.js";
import { toast } from "../ui/Toast.js";

export default class InvestmentEngine{

    constructor(company,investments){

        this.company=company;

        this.investments=investments;

        this.selected=[];

    }

    render(){

        const container=
        document.getElementById("investmentArea");

        container.innerHTML="";

        this.investments.forEach(investment=>{

            container.appendChild(

                this.createCard(investment)

            );

        });

    }

    createCard(investment){

        const approved=this.selected.includes(investment.id);

        const card=document.createElement("div");

        card.className=`investment-card${approved?" approved":""}`;

        card.innerHTML=`

        <div class="department">

            ${investment.department}

        </div>

        <div class="icon">

            ${investment.icon}

        </div>

        <h2>

        ${investment.title}

        </h2>

        <p>

        ${investment.description}

        </p>

        <div class="stats">

            <span>

            💰 ₹${investment.cost} Lakhs

            </span>

            <span>

            ⭐ ROI ${investment.roi}/5

            </span>

        </div>

        <div class="risk">

        Risk : ${investment.risk}

        </div>

        <button${approved?" disabled":""}>

        ${approved?"✔ APPROVED":"APPROVE"}

        </button>

        `;

        if(!approved){

            card.querySelector("button")

            .addEventListener(

                "click",

                ()=>this.buy(investment)

            );

        }

        return card;

    }

    buy(investment){

        if(this.company.financials.budget<investment.cost){

            alert("Budget exceeded");

            return;

        }

        if(this.selected.includes(investment.id)){

            alert("Already Approved");

            return;

        }

        this.company.financials.budget-=investment.cost;

        this.selected.push(investment.id);

        console.log(

            investment.title,

            "approved."

        );

        toast(`${investment.title} Approved`);

        gameState.notify();

    }

}
