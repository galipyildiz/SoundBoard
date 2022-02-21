//play buttons
const buttons = document.body.getElementsByTagName("button");
const booBtn = document.getElementById("booSound");
const applauseBtn = document.getElementById("applauseSound");
const gaspBtn = document.getElementById("gaspSound");
const tadaBtn = document.getElementById("tadaSound");
const victoryBtn = document.getElementById("victorySound");
const wrongBtn = document.getElementById("wrongSound");

//sound
const sound = document.getElementById("sound");

//image
const image = document.getElementById("image");

window.addEventListener('DOMContentLoaded',function(){
    image.style.display = "block";
    for (const iterator of buttons) {
        iterator.style.display = "block";
    }
});

booBtn.onclick = function(){
    sound.src = ".\\sounds\\boo.mp3";
    image.src = ".\\images\\booing.gif";
    document.body.style.backgroundColor = "Coral";
    sound.play();
}

applauseBtn.onclick = function(){
    sound.src = ".\\sounds\\applause.mp3";
    image.src = ".\\images\\applause.gif";
    document.body.style.backgroundColor = "CadetBlue";
    sound.play();
}

gaspBtn.onclick = function(){
    sound.src = ".\\sounds\\gasp.mp3";
    image.src = ".\\images\\gasping.gif";
    document.body.style.backgroundColor = "DarkSlateGray";
    sound.play();
}

tadaBtn.onclick = function(){
    sound.src = ".\\sounds\\tada.mp3";
    image.src = ".\\images\\tada.gif";
    document.body.style.backgroundColor = "MediumAquaMarine";
    sound.play();
}

victoryBtn.onclick = function(){
    sound.src = ".\\sounds\\victory.mp3";
    image.src = ".\\images\\victory.gif";
    document.body.style.backgroundColor = "Tan";
    sound.play();
}

wrongBtn.onclick = function(){
    sound.src = ".\\sounds\\wrong.mp3";
    image.src = ".\\images\\wrong.gif";
    document.body.style.backgroundColor = "black";
    sound.play();
}
sound.onended = function(){
    image.src = ".\\sound.png";
    document.body.style.backgroundColor = "#a164df";
}



