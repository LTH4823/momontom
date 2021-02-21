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
    nameform.addEventListener("submit",showTodo);
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
        hideTodo();
    }else{
        paintGreeting(currentUser);
        showTodo(); 
    }
}

function showTodo(){
    todoarea.style.display="flex";
}

function hideTodo(){
    todoarea.style.display="none";
}

function init(){
    loadName();
}

init();