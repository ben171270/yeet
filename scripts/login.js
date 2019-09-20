import { State } from "./state.js";

export class Login {

    /**
     * @param {HTMLElement} login 
     * @param {State} state 
     */
    constructor(login, state) {
        this._login = login;
        this._state = state;

        this._login.querySelector("form").addEventListener("submit", this._onLogin.bind(this));
    }

    _onLogin(event) {
        event.preventDefault();
    
        const form = event.target;
        this._state.name = form.querySelectorAll("input")[0].value;
        this._state.color = form.querySelectorAll("input")[1].value;
    
        this._login.style.display = "none";
    }

}