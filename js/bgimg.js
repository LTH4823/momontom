const main = document.querySelector(".main");
IMG_NUMBER = 3;

function paintImage(imgNumber){
    main.classList.add("bgimg");
    const bgimg = document.querySelector(".bgimg");
    bgimg.style.backgroundImage = `url(/img/img${imgNumber+1}.jpg)`;
    bgimg.style.backgroundSize = "cover";
    bgimg.style.backgroundPosition = "center";
}


function genRandom(){
    const number = Math.floor(Math.random()*IMG_NUMBER);
    return number;
}

function init(){
    const randomNumber = genRandom();
    paintImage(randomNumber);
}

init();