const pending = document.querySelector(".js-pending"),
finished = document.querySelector(".js-finished"),
todojsform = document.querySelector(".js-form-todo"),
todoinput = todojsform.querySelector("input");

const DEFAULT_PENDING = "PENDING";
const DEFAULT_FINISHED = "FINISHED"

let pendWork = [],
finishWork = [];

function removePending(event){
    const btn = event.target;
    const li = btn.parentNode;
    pending. removeChild(li);
    const cleanPending = pendWork.filter(function(pend){     
        return pend.id !== parseInt(li.id);
    });
    pendWork = cleanPending;
    savePending();
}

function removeFinish(event){
    const btn = event.target;
    const li = btn.parentNode;
    finished. removeChild(li);
    const cleanFinished = finishWork.filter(function(finish){     
        return finish.id !== parseInt(li.id);
    });
    finishWork = cleanFinished;
    saveFinish();
}

function Checkfun(event){
    const btn = event.target;
    const li = btn.parentNode;
    const span = li.firstChild.innerText;
    pending. removeChild(li);
    const cleanPending = pendWork.filter(function(pend){     
        return pend.id !== parseInt(li.id);
    });
    pendWork = cleanPending;
    
    paintFinished(span);
    savePending();
    saveFinish();
}

function backfun(event){
    const btn = event.target;
    const li = btn.parentNode;
    const span = li.firstChild.innerText;
    finished. removeChild(li);
    const cleanFinished = finishWork.filter(function(finish){     
        return finish.id !== parseInt(li.id);
    });
    finishWork = cleanFinished;

    paintPending(span);
    saveFinish();
    savePending();
}


function paintPending(text){
    const pend_li =document.createElement("li");
    const pend_delbtn = document.createElement("button");
    const pend_checkbtn = document.createElement("button");
    const pend_span = document.createElement("span");
    const newid =  pendWork.length + 1;
    pend_li.id = newid;
    pend_delbtn.innerText = "❌";
    pend_delbtn.addEventListener("click", removePending);
    pend_checkbtn.innerText = "✔";
    pend_checkbtn.addEventListener("click",Checkfun);
    pend_span.innerText = text;
    pend_li.appendChild(pend_span);
    pend_li.appendChild(pend_delbtn);
    pend_li.appendChild(pend_checkbtn);
    pending.appendChild(pend_li);
    
    const pendObj = {
        text:text,
        id:newid
    }
    pendWork.push(pendObj);
    savePending();
}

function paintFinished(text){
    const finish_li =document.createElement("li");
    const finish_delbtn = document.createElement("button");
    const finish_backbtn = document.createElement("button");
    const finish_span = document.createElement("span");
    const newid =  finishWork.length + 1;
    finish_li.id = newid;
    finish_delbtn.innerText = "❌";
    finish_delbtn.addEventListener("click", removeFinish);
    finish_backbtn.innerText = "◀";
    finish_backbtn.addEventListener("click",backfun);
    finish_span.innerText = text;
    finish_li.appendChild(finish_span);
    finish_li.appendChild(finish_delbtn);
    finish_li.appendChild(finish_backbtn);
    finished.appendChild(finish_li);
    const finishObj = {
        text:text,
        id:newid
    }
    finishWork.push(finishObj);
    saveFinish();
}


function savePending(){
    localStorage.setItem(DEFAULT_PENDING,JSON.stringify(pendWork));
}

function saveFinish(){
    localStorage.setItem(DEFAULT_FINISHED,JSON.stringify(finishWork));
}


function loadPeding(){
    const loadedPending = localStorage.getItem(DEFAULT_PENDING);
    if(loadedPending !==null){
        const parsedPeding = JSON.parse(loadedPending);
        parsedPeding.forEach(function(pend){
            paintPending(pend.text);
        });
    }
}

function loadFinish(){
    const loadedFinish = localStorage.getItem(DEFAULT_FINISHED);
    if(loadedFinish !==null){
        const parsedFinish = JSON.parse(loadedFinish);
        parsedFinish.forEach(function(finih){
            paintFinished(finih.text);
        });
    }
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = todoinput.value;
    paintPending(currentValue);
}

function init(){
    loadPeding();
    loadFinish();
    todojsform.addEventListener("submit", handleSubmit);
}

init();