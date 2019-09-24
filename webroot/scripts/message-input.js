// do not use this imports, they are for IntelliSense
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

        this._form.querySelector(".user").addEventListener("click", () => state.showLogin = true);
    }

    _onSend(event) {
        event.preventDefault();
        const input = this._form.querySelector("input");
        
        const message = input.value;
        input.value = "";
    
        fetch("/message",
            {method : "POST",
            body : JSON.stringify( {
                name : this._state.name , 
                color : this._state.color,
                message            
            })
        }).catch((error) => console.log(error));
   }

    _onStateChange() {
        const user = this._form.querySelector(".user");
        
        user.textContent = this._state.name;
        user.style.color = "#" + this._state.color;
    }
}