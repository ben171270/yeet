export class Output {
    /**
     * @param {HTMLElement} output 
     */
    constructor(output) {
        this._output = output;
    }

    /**
     * Add a Message to Output
     * 
     * @param {{name: string, color: string, message: string}} data 
     */
    add(data) {
        const message = document.createElement("div");
        message.classList.add("message");
        
        const user = document.createElement("span");
        user.textContent = data.name + ": ";
        user.classList.add("user");
        user.style.color= "#" + data.color;
        
        const text = document.createElement("span");
        text.textContent = data.message;
        text.classList.add("text");
        
        message.appendChild(user);
        message.appendChild(text);

        this._output.appendChild(message);
    }

}