const output = document.getElementById("output");
const form = document.querySelector("#msgInput form");


const user = "" ;
form.querySelector(".user").textContent = user;

const color = "";

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

loginForm.addEventListener("submit", function() {
    alert("hello world");
});
   




