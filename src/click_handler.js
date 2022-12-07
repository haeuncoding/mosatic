export default class ClickHandler {
    
    constructor (keysDown) {
        // this.soundState = document.querySelector('.mute-sound')
        this.keysDown = keysDown
        this.recButton = document.querySelector("#record-button")
        this.playButton = document.querySelector("#play-button")
        console.log(this.soundState)
        this.addRecordListener()
        this.addPlayListener()
    }

    addRecordListener() {
     this.recButton.addEventListener('click', e => {
        e.preventDefault()
        e.stopImmediatePropagation()
        this.hitRecordButton()
        console.log(this.keysDown.recording)
        console.log(this.keysDown.keys)
    }
    )}

    addPlayListener() {
     this.playButton.addEventListener('click', e => {
        e.preventDefault()
        e.stopImmediatePropagation()
        this.hitPlayButton()
    }
    )}

    hitRecordButton () {
        if (!this.keysDown.recording) {
            this.keysDown.recording = true;
        } else {
            this.keysDown.recording = false;
        }
    }
    
    hitPlayButton () {
        this.keysDown.playBack()
    }

    
    changeSoundState = function() {
        if (this.soundState.id === "sound-button") {
            this.soundState.src = "./src/styles/assets/Mute Button.png"
        } else { 
            this.soundState.src = "./src/styles/assets/Sound Button.png"
        }
    }

}