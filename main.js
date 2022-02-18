//play buttons
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

booBtn.onclick = function(){
    sound.src = ".\\sounds\\boo.mp3";
    image.src = ".\\images\\booing.gif";
    sound.play();
}
applauseBtn.onclick = function(){
    sound.src = ".\\sounds\\applause.mp3";
    image.src = ".\\images\\applause.gif";
    sound.play();
}

gaspBtn.onclick = function(){
    sound.src = ".\\sounds\\gasp.mp3";
    image.src = ".\\images\\gasping.gif";
    sound.play();
}

tadaBtn.onclick = function(){
    sound.src = ".\\sounds\\tada.mp3";
    image.src = ".\\images\\tada.gif";
    sound.play();
}

victoryBtn.onclick = function(){
    sound.src = ".\\sounds\\victory.mp3";
    image.src = ".\\images\\victory.gif";
    sound.play();
}

wrongBtn.onclick = function(){
    sound.src = ".\\sounds\\wrong.mp3";
    image.src = ".\\images\\wrong.gif";

    sound.play();
}
sound.onended = function(){
    image.src = ".\\sound.png";
}



