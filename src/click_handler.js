// stop button idea - if the play length isn't at 0, reset it to 0
// but if it is at zero, clear the recorded array
// pause will just pause, and then resume when play is pressed again
// mute will do something with selectAudioOutput()
// still need to make reverb knob

export default class ClickHandler {
    
    constructor (keysDown) {
        // this.soundState = document.querySelector('.mute-sound')
        this.keysDown = keysDown
        this.soundBank = keysDown.soundBank
        this.recButton = document.querySelector("#record-button")
        this.playButton = document.querySelector("#play-button")
        this.pauseButton = document.querySelector("pause-button")
        this.stopButton = document.querySelector("stop-button")
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

    hitRecordButton () {
        if (!this.keysDown.recording) {
            this.keysDown.recording = true;
        } else {
            this.keysDown.recording = false;
        }
    }
    
    addPlayListener() {
     this.playButton.addEventListener('click', e => {
        e.preventDefault()
        e.stopImmediatePropagation()
        this.hitPlayButton()
    }
    )}

    hitPlayButton () {
        this.keysDown.playBack()
    }

    addStopListener() {
     this.stopButton.addEventListener('click', e => {
        e.preventDefault()
        e.stopImmediatePropagation()
        this.hitStopButton()
        console.log(this.keysDown.keys)
        console.log(this.keysDown.durations)
    }
    )}

    hitStopButton () {
        if (this.soundBank.anyPaused()) {
            this.soundBank.resetAllTime()
        } else {
            this.soundBank.resetAllTime()
            this.keysDown.keys = [];
            this.keysDown.durations = [];
        }
    }

    addPauseListener() {
     this.pauseButton.addEventListener('click', e => {
        e.preventDefault()
        e.stopImmediatePropagation()
        this.hitPauseButton()
    }
    )}

    hitPauseButton () {
        if (this.soundBank.anyPaused) {
            this.soundBank.playFromPause()
        } else {
        this.soundBank.pauseAll()
        }
    }

    
    changeSoundState = function() {
        if (this.soundState.id === "sound-button") {
            this.soundState.src = "./src/styles/assets/Mute Button.png"
        } else { 
            this.soundState.src = "./src/styles/assets/Sound Button.png"
        }
    }

}