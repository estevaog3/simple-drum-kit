function addPlayingEffect(pressedKey){
    let key = document.querySelector('div.'+pressedKey);
    key.classList.add('playing');
}

function removePlayingEffect(){
    this.classList.remove('playing');
}

function playTheDrum(event){
    let pressedKey = event.key;
    let audioChosen = document.querySelector("audio."+ pressedKey);
    if(audioChosen){
        let audioSource = new Audio(audioChosen.getAttribute('src'));
        audioSource.play();
        addPlayingEffect(pressedKey);        
    }
}

window.addEventListener('keypress', playTheDrum);

const keys = document.querySelectorAll("#key");
keys.forEach(key => key.addEventListener('transitionend', removePlayingEffect));