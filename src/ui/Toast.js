"use strict";

export function toast(message){

    const toast=document.createElement("div");

    toast.className="toast";

    toast.innerText=message;

    document.body.appendChild(toast);

    setTimeout(()=>{

        toast.classList.add("show");

    },100);

    setTimeout(()=>{

        toast.remove();

    },2500);

}
