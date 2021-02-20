const nameform = document.querySelector(".js-form-name"),
input = nameform.querySelector("input"),
greeting = document.querySelector(".js-greetings");

const USER_LS="CURRENT_USER",
SHOWING_CN= "name";

function saveName(text){
    localStorage.setItem(USER_LS,text);
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue); 
}

function askForName(){
    nameform.addEventListener("submit",handleSubmit);
}

function paintGreeting(text){
    nameform.classList.add("hide");
    greeting.classList.add(SHOWING_CN);
    greeting.innerText=`${text}`;
}

function loadName(){
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser===null){
        askForName();
    }else{
        paintGreeting(currentUser); 
    }
}

function init(){
    loadName();
}

init();