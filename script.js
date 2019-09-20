import {State} from "./scripts/state.js";
import {Output} from "./scripts/output.js";
import {Login} from "./scripts/login.js";
import {MessageInput} from "./scripts/message-input.js";

const state = new State();

const output = new Output(document.getElementById("output"));
const login = new Login(document.getElementById("login"), state);
const input = new MessageInput(document.getElementById("msgInput"), state, output);





