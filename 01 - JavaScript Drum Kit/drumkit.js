document.addEventListener('keydown', playSound);

function playSound(e){
    const pressedKey = e.keyCode;    
    const drumKeyElement = document.querySelector(`.keys [data-key="${pressedKey}"]`);
    const soundElement = document.querySelector(`audio[data-key="${pressedKey}"]`);

    if(drumKeyElement && soundElement){
        soundElement.currentTime = 0;
        soundElement.play();
        animateKeyPress(drumKeyElement);
    }
}

function animateKeyPress(drumKeyElement){
    const removePlaying = () => drumKeyElement.classList.remove('playing');
    drumKeyElement.addEventListener('transitionend', removePlaying);
    drumKeyElement.classList.add('playing');    
}