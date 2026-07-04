"use strict";

/*
=====================================
Factory Tycoon™
Game State Manager
=====================================
*/

class GameState {

    constructor(){

        this.listeners=[];

    }

    subscribe(callback){

        this.listeners.push(callback);

    }

    notify(){

        this.listeners.forEach(listener=>listener());

    }

}

const gameState = new GameState();

export default gameState;
