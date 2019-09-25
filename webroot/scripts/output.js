export class Output {
    _lastId = 0;

    /**
     * @param {HTMLElement} output 
     */
    constructor(output) {
        this._output = output;

        setInterval(() => {     
            fetch("/messages/" + this._lastId)
                .then(async (response) => {
                    if(!response.ok){
                        throw response.statusText;
                    } 
                    const messages = await response.json();
                    for (const message of messages) {
                        this.add(message);
                        if (this._lastId < message.id) {
                            this._lastId = message.id;
                        }

                    }
                }) 
                .catch((error) => {
                    console.error("on fetch " ,  error);
                });
        }, 1000);
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

        const isEnd = this._output.offsetHeight + this._output.scrollTop === this._output.scrollHeight;
    
        this._output.appendChild(message);

        if (isEnd) {
            message.scrollIntoView();
        }        
    }

}