import {State} from "./state.js";

export class Colors {
    _colors = ["db1212", "db8e12","dbce12", "70db12", "00c7b0", "0050c7", "8100c7", "fa02f2", "ad036f", "f24495"];

    /**
     * @param {HTMLElement} wrapper 
     * @param {State} state
     */
    constructor(wrapper, state) {
        this._state = state;
        this._wrapper = wrapper;

        state.color = this._colors[0];
        state.listen(this._render.bind(this));

        this._render();
    }
    
    _render() {
        while (this._wrapper.firstChild) {
            this._wrapper.removeChild(this._wrapper.firstChild);
        }

        for (const color of this._colors){
            const picker = document.createElement("span");
            picker.style.backgroundColor = "#" + color;

            picker.addEventListener("click", () => {
                this._state.color = color;
            });

            if (this._state.color === color){
                picker.classList.add("active");
            }

            this._wrapper.appendChild(picker);
        }  
    }
}   