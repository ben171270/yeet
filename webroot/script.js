import {State} from "./scripts/state.js";
import {Output} from "./scripts/output.js";
import {Login} from "./scripts/login.js";
import {MessageInput} from "./scripts/message-input.js";
import {Colors} from "./scripts/colors.js";

const state = new State();

const output = new Output(document.getElementById("output"));

new Login(document.getElementById("login"), state);
new MessageInput(document.getElementById("msgInput"), state, output);
new Colors(document.getElementById("colors"), state);