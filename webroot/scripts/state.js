export class State {
    _name = "";
    _color = "";
    _showLogin = true;
    _listener = [];

    /**
     * @param {string}
     */
    set name(name) {
        this._name = name;
        this._trigger();
    }

    /**
     * @returns {string}
     */
    get name() {
        return this._name;
    }

    /**
     * @param {boolean}
     */
    set showLogin(show) {
        this._showLogin = show;
        this._trigger();
    }

    /**
     * @returns {boolean}
     */
    get showLogin() {
        return this._showLogin;
    }

    /**
     * @param {string}
     */
    set color(color) {
        this._color = color;
        this._trigger();
    }

    /**
     * @returns {string}
     */
    get color() {
        return this._color;
    }

    /**
     * Add Eventlistener
     * 
     * @param {() => void)} listener 
     * @returns {() => void)}
     */
    listen(listener) {
        if (this._listener.indexOf(listener) === -1) {
            // nur wenn der listener nicht in dem Array this._listener enthalten ist
            // dann fuege den listener zu dem Array hinzu
            this._listener.push(listener);
        }

        // Wir geben eine Funktion zurueck, die den listener wieder entfernt wenn man sie ausfuert
        return () => {
            const index = this._listener.indexOf(listener);

            if (index !== -1) {
                // nur wenn der listener in dem Array this._listener enthalten ist
                // dann loesche den listener aus dem Array
                this._listener.splice(index, 1);
            }
        }
    }

    _trigger() {
        for (const listener of this._listener) {
            listener();
        }
    }
}