// stop button idea - if the play length isn't at 0, reset it to 0
// but if it is at zero, clear the recorded array
// pause will just pause, and then resume when play is pressed again
// mute will do something with selectAudioOutput()
// still need to make reverb knob

export default class ClickHandler {
    
    constructor (keysDown) {
        this.keysDown = keysDown
        this.soundBank = keysDown.soundBank
        this.allSounds = document.querySelectorAll("audio")
        this.soundArr = Array.from(this.allSounds)
        // buttons
        this.recButton = document.querySelector("#record-button")
        this.playButton = document.querySelector("#play-button")
        // this.pauseButton = document.querySelector("#pause-button")
        this.stopButton = document.querySelector("#stop-button")
        this.muteButton = document.querySelector("#mute-button")
        this.soundButton = document.querySelector("#sound-button")
        this.muteFunction = document.querySelector(".mute-sound")

        // listeners
        this.addRecordListener()
        this.addPlayListener()
        // this.addPauseListener()
        this.addStopListener()
        this.addMuteListener()
        this.addSoundListener()
        this.flag = false
    }

    addMuteListener() {
        this.muteButton.addEventListener('click', e => {
            e.preventDefault()
            e.stopImmediatePropagation()
            this.hitMuteButton()
        })
    }

    addSoundListener() {
        this.soundButton.addEventListener('click', e => {
            e.preventDefault()
            e.stopImmediatePropagation()
            this.hitMuteButton()
        })
    }

    muteAll () {
        this.allSounds.forEach(sound => {
            this.muteEle(sound);
        })
    }

    muteEle (ele) {
        ele.muted = true;
    }

    unmuteAll () {
        this.allSounds.forEach(sound => {
            this.unmuteEle(sound)
        })
    }

    unmuteEle (ele) {
        ele.muted = false;
    }

    hitMuteButton() {
        console.log('bro')
        if (this.muteButton.style.display === "inherit") {
            // audio.muted = true;
            this.muteAll()
            this.soundButton.style.display = "inherit"
            this.muteButton.style.display ="none"
            console.log('whaddup')
            console.log(this.muteFunction.class)
        } else {
            // audio.muted = false
            this.unmuteAll()
            this.soundButton.style.display = "none"
            this.muteButton.style.display ="inherit"
            console.log("i'm dying, it feels like a dream")
            console.log(this.muteFunction.class)
        }
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
            this.recButton.style.filter = "brightness(60%)"
        } else {
            this.keysDown.recording = false;
            this.recButton.style.filter = "brightness(100%)"

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
        this.keysDown.playBackCheck()
    }

    addStopListener() {
     this.stopButton.addEventListener('click', e => {
        e.preventDefault()
        e.stopImmediatePropagation()
        console.log(this.keysDown.keys)
        console.log(this.keysDown.durations)
        this.hitStopButton()
    }
    )}

    hitStopButton () {
        let paused = this.soundArr.filter(sound => sound.paused)
        console.log(paused)
        // if (paused.length) {
        //     this.pauseAll()
        //     this.resetAll();
        // } else {
            this.pauseAll()
            this.resetAll()
            this.keysDown.setCanvas()
            this.keysDown.resetCanvas()
            this.keysDown.keys = [];
            this.keysDown.durations = [];
        
        console.log(this.keysDown.keys)
        console.log(this.keysDown.durations)
    }

    resetAll () {
        this.allSounds.forEach(sound => {
            sound.currentTime = 0;
        })
    }

    pauseAll () {
        this.allSounds.forEach(sound => {
            sound.pause();
        })
    }

    // playCheck () {
    //     let flag = false
    //     this.soundArr.forEach(sound => {
    //         if (!sound.pause()) flag = true;
    //     })
    //     return flag;
    // }

    // addPauseListener() {
    //  this.pauseButton.addEventListener('click', e => {
    //     e.preventDefault()
    //     e.stopImmediatePropagation()
    //     this.hitPauseButton()
    // }
    // )}

    resumeAll () {
        this.soundArr.forEach(sound => {
            if (sound.currentTime > 0) sound.play();
        })
    }

    // hitPauseButton () {
    //     if (this.playCheck()) {
    //         this.pauseAll;
    //     } else {
    //         this.resumeAll;
    //     }
    // }

    
    changeSoundState = function() {
        if (this.soundState.id === "sound-button") {
            this.soundState.src = "./src/styles/assets/Mute Button.png"
        } else { 
            this.soundState.src = "./src/styles/assets/Sound Button.png"
        }
    }

}