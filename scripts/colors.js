export class Colors {
    _colors = ["FF0000", "00FF00", "03c2fc", "fc0303", "84fc03", "fc03db", "03d3fc", "03fc5a", "fc4e03"];

    /**
     * @param {HTMLElement} wrapper 
     */
    constructor(wrapper){
        this._wrapper = wrapper;
        this.render();
    }
    
    render() {
        for (const color of this._colors){
            const picker = document.createElement("span");
            picker.style.backgroundColor = "#" + color;
            this._wrapper.appendChild(picker);
        }  
    }
}   