import { State } from "./state.js";
import { Output } from "./output.js";

export class MessageInput {

    /**
     * @param {HTMLElement} input 
     * @param {State} state 
     * @param {Output} output 
     */
    constructor(input, state, output) {
        this._input = input;
        this._state = state;
        this._output = output;

        this._form = input.querySelector("form");
        this._form.addEventListener("submit", this._onSend.bind(this));

        state.listen(this._onStateChange.bind(this));
    }

    _onSend(event) {
        event.preventDefault();
        
        const message = this._form.querySelector("input").value;
    
        this._output.add({
            name: this._state.name,
            color: this._state.color,
            message
        });
    }

    _onStateChange() {
        this._input.querySelector(".user").textContent = this._state.name;
    }
}