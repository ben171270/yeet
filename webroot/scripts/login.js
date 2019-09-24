// do not use this imports, they are for IntelliSense
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

        state.listen(this._onStateChange.bind(this));
    }

    _onLogin(event) {
        event.preventDefault();
    
        const form = event.target;
        this._state.name = form.querySelector("input").value;
        this._state.showLogin = false;
    }

    _onStateChange() {
        if (this._state.showLogin) {
            this._login.style.display = "grid";
        } else {
            this._login.style.display = "none";
        }
    }

}