const output = document.getElementById("output");
const form = document.querySelector("#msgInput form");

let user = "" ;
let color = "";

function addMessage(data, output) {
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

    output.appendChild(message);
}

function onSubmit(event, output, name, color) {
    event.preventDefault();
    
    const form = event.target;
    const message = form.querySelector("input").value

    addMessage({name, color, message}, output);
}

form.addEventListener("submit", (event) => onSubmit(event, output, user, color));
 
const loginForm = document.querySelector("#login form");

loginForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const form = event.target;
    user = form.querySelectorAll("input")[0].value 
    color = form.querySelectorAll("input")[1].value

    document.querySelector("#msgInput .user").textContent = user;
    document.querySelector("#login").style.display = "none";
});
   




