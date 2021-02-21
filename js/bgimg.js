const main = document.querySelector(".main");

IMG_NUMBER = 3;

function paintImage(imgNumber){
    
    // const image = new Image();
    // image.src = `/img/img${imgNumber + 1}.jpg`;
    // image.classList.add("bgImage");
    // image.style.backgroundSize = "cover";
    // image.style.backgroundPosition = "center";
    // body.prepend(image);
    
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