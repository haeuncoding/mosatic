import AudioBank from './audio_bank.js'

let CONSTANTS = {
    KEY_ALPHABET: Array.from('QWERTYUIOPASDFGHJKLZXCVBNM')
}

export default class KeyDownHandler {
    constructor() {
        this.keys = [];
        this.soundBank = new AudioBank
        this.soundBank.createBank(CONSTANTS.KEY_ALPHABET)
        this.addListeners()
    }

    addListeners() {
     window.addEventListener('keydown', e => {
        e.preventDefault()
        e.stopImmediatePropagation()  
        console.log(e.code)
        switch(e.code) {
        case "KeyQ":
            this.soundBank.playQ()
        break;
        
        case "KeyW":
            this.soundBank.playW()
        break;

        case "KeyE":
            this.soundBank.playE()
        break;

        case "KeyR":
            this.soundBank.playR()
        break;

        case "KeyT":
            this.soundBank.playT()
        break;

        case "KeyY":
            this.soundBank.playY()
        break;

        case "KeyU":
            this.soundBank.playU()
        break;

        case "KeyI":
            this.soundBank.playI()
        break;

        case "KeyO":
            this.soundBank.playO()
        break;

        case "KeyP":
            this.soundBank.playP()
        break;

        case "KeyA":
            this.soundBank.playA()
        break;

        case "KeyS":
            this.soundBank.playS()
        break;

        case "KeyD":
            this.soundBank.playD()
        break;

        case "KeyF":
            this.soundBank.playF()
        break;

        case "KeyG":
            this.soundBank.playG()
        break;

        case "KeyH":
            this.soundBank.playH()
        break;

        case "KeyJ":
            this.soundBank.playJ()
        break;

        case "KeyK":
            this.soundBank.playK()
        break;

        case "KeyL":
            this.soundBank.playL()
        break;

        case "KeyZ":
            this.soundBank.playZ()
        break;

        case "KeyX":
            this.soundBank.playX()
        break;

        case "KeyC":
            this.soundBank.playC()
        break;

        case "KeyV":
            this.soundBank.playV()
        break;

        case "KeyB":
            this.soundBank.playB()
        break;

        case "KeyN":
            this.soundBank.playN()
        break;

        case "KeyM":
            this.soundBank.playM()
        break;
    }
    })
    };
};


    // extraneous code that worked previously for reference () {
    //     const audioContextQ = new AudioContext()
    //     const qSource = document.querySelector('#Q-id')
    //     const qSound = audioContextQ.createMediaElementSource(qSource);
    //     qSound.connect(audioContextQ.destination)
        //   const audioContextQ = new AudioContext()
    //   console.log(audioContextQ instanceof AudioContext)
    //   const qSource = document.querySelector('#Q-id')
    //   console.log(qSource instanceof HTMLMediaElement)
    //   const qSound = audioContextQ.createMediaElementSource(qSource);
    //   console.log(qSound instanceof MediaElementAudioSourceNode)
    //   qSound.connect(audioContextQ.destination)
    // }

