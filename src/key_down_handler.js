import AudioBank from './audio_bank.js'
import AniBank from './ani_bank.js';

let CONSTANTS = {
    KEY_ALPHABET: Array.from('QWERTYUIOPASDFGHJKLZXCVBNM')
}
export default class KeyDownHandler {
    constructor() {
        // audio
        this.soundBank = new AudioBank
        this.soundBank.createBank(CONSTANTS.KEY_ALPHABET)
        // visual
        this.canvas = document.querySelector('canvas');
        this.context = this.canvas.getContext('2d');
        this.background_colors = ["#95c88c", "#967bb6", "#A7C7E7", "#FF6961"]
        this.aniBank = new AniBank;
        // recording/user interaction
        this.keys = [];
        this.durations = [];
        this.recording = false;
        this.addListeners()
    }

    recordKeys(e) {
        if (this.recording) {
            this.keys.push(e)
            console.log(this.keys)
            this.getTimestampsMS()
        }
    }

    getTimestampsMS = function() {
    if (!this.durations.length) {
        this.durations.push(Date.now())
    } else {
        let timeNow = (Date.now() - this.durations[0])
        this.durations.push(timeNow)
    }};

    playBack() {
        let refNum = this.durations.length
        this.durations.shift()
        this.durations.unshift(0)
        for (let i = 0; i < refNum; i++) {
            let time = this.durations[i];
            let key = this.keys[i]
            console.log(time)
            console.log(key.code)
            setTimeout(() => {
                this.playSwitch(key)
            }, time)
        }
    }

    playSwitch(e) {
        switch(e.code) {        
        case "Space":
                this.resetCanvas()
                this.setCanvas()
            break;

        case "KeyQ":
            this.soundBank.playQ()
            this.aniBank.aniQ()
            this.resetCanvas()
        break;
        
        case "KeyW":
            this.soundBank.playW()
            this.aniBank.aniW()
            this.resetCanvas()
        break;

        case "KeyE":
            this.soundBank.playE()
            this.aniBank.aniE()
            this.resetCanvas()
        break;

        case "KeyR":
            this.soundBank.playR()
            this.aniBank.aniR()
            this.resetCanvas()
        break;

        case "KeyT":
            this.soundBank.playT()
            this.aniBank.aniT()
            this.resetCanvas()
        break;

        case "KeyY":
            this.soundBank.playY()
            this.aniBank.aniY()
            this.resetCanvas()
        break;

        case "KeyU":
            this.soundBank.playU()
            this.aniBank.aniU()
            this.resetCanvas()
        break;

        case "KeyI":
            this.soundBank.playI()
            this.aniBank.aniI()
            this.resetCanvas()
        break;

        case "KeyO":
            this.soundBank.playO()
            this.aniBank.aniO()
            this.resetCanvas()
        break;

        case "KeyP":
            this.soundBank.playP()
            this.aniBank.aniP()
            this.resetCanvas()
        break;

// middle row

        case "KeyA":
            this.soundBank.playA()
            this.aniBank.aniA()
            this.resetCanvas()
        break;

        case "KeyS":
            this.soundBank.playS()
            this.aniBank.aniS()
            this.resetCanvas()
        break;

        case "KeyD":
            this.soundBank.playD()
            this.aniBank.aniD()
            this.resetCanvas()
        break;

        case "KeyF":
            this.soundBank.playF()
            this.aniBank.aniF()
            this.resetCanvas()
        break;

        case "KeyG":
            this.soundBank.playG()
            this.aniBank.aniG()
            this.resetCanvas()
        break;

        case "KeyH":
            this.soundBank.playH()
            this.aniBank.aniH()
            this.resetCanvas()
        break;

        case "KeyJ":
            this.soundBank.playJ()
            this.aniBank.aniJ()
            this.resetCanvas()
        break;

        case "KeyK":
            this.soundBank.playK()
            this.aniBank.aniK()
            this.resetCanvas()
        break;

        case "KeyL":
            this.soundBank.playL()
            this.aniBank.aniL()
            this.resetCanvas()
        break;

// bottom row

        case "KeyZ":
            this.soundBank.playZ()
            this.aniBank.aniZ()
            this.resetCanvas()
        break;

        case "KeyX":
            this.soundBank.playX()
            this.aniBank.aniX()
            this.resetCanvas()
        break;

        case "KeyC":
            this.soundBank.playC()
            this.aniBank.aniC()
            this.resetCanvas()
        break;

        case "KeyV":
            this.soundBank.playV()
            this.aniBank.aniV()
            this.resetCanvas()
        break;

        case "KeyB":
            this.soundBank.playB()
            this.aniBank.aniB()
            this.resetCanvas()
        break;

        case "KeyN":
            this.soundBank.playN()
            this.aniBank.aniN()
            this.resetCanvas()
        break;

        case "KeyM":
            this.soundBank.playM()
            this.aniBank.aniM()
            this.resetCanvas()
        break;
        default:
            console.log('whoopsies!')
        break;
        }
    }

    setCanvas() {
        let shift = this.background_colors.shift()
        this.background_colors.push(shift)
        this.context.fillStyle = this.background_colors[0]
        this.context.fillRect(0, 0, 1920, 1080) 
        this.context.save()
    }

    resetCanvas() {
        this.context.resetTransform()
    }

    addListeners() {
     window.addEventListener('keydown', e => {
        e.preventDefault()
        e.stopImmediatePropagation()  
        console.log(e.code)
        switch(e.code) {        
        case "Space":
            this.resetCanvas()
            this.setCanvas()
        break;

        case "KeyQ":
            this.recordKeys(e)
            this.soundBank.playQ()
            this.aniBank.aniQ()
            this.resetCanvas()
        break;
        
        case "KeyW":
            this.recordKeys(e)
            this.soundBank.playW()
            this.aniBank.aniW()
            this.resetCanvas()
        break;

        case "KeyE":
            this.recordKeys(e)
            this.soundBank.playE()
            this.aniBank.aniE()
            this.resetCanvas()
        break;

        case "KeyR":
            this.recordKeys(e)
            this.soundBank.playR()
            this.aniBank.aniR()
            this.resetCanvas()
        break;

        case "KeyT":
            this.recordKeys(e)
            this.soundBank.playT()
            this.aniBank.aniT()
            this.resetCanvas()
        break;

        case "KeyY":
            this.recordKeys(e)
            this.soundBank.playY()
            this.aniBank.aniY()
            this.resetCanvas()
        break;

        case "KeyU":
            this.recordKeys(e)
            this.soundBank.playU()
            this.aniBank.aniU()
            this.resetCanvas()
        break;

        case "KeyI":
            this.recordKeys(e)
            this.soundBank.playI()
            this.aniBank.aniI()
            this.resetCanvas()
        break;

        case "KeyO":
            this.recordKeys(e)
            this.soundBank.playO()
            this.aniBank.aniO()
            this.resetCanvas()
        break;

        case "KeyP":
            this.recordKeys(e)
            this.soundBank.playP()
            this.aniBank.aniP()
            this.resetCanvas()
        break;

// middle row

        case "KeyA":
            this.recordKeys(e)
            this.soundBank.playA()
            this.aniBank.aniA()
            this.resetCanvas()
        break;

        case "KeyS":
            this.recordKeys(e)
            this.soundBank.playS()
            this.aniBank.aniS()
            this.resetCanvas()
        break;

        case "KeyD":
            this.recordKeys(e)
            this.soundBank.playD()
            this.aniBank.aniD()
            this.resetCanvas()
        break;

        case "KeyF":
            this.recordKeys(e)
            this.soundBank.playF()
            this.aniBank.aniF()
            this.resetCanvas()
        break;

        case "KeyG":
            this.recordKeys(e)
            this.soundBank.playG()
            this.aniBank.aniG()
            this.resetCanvas()
        break;

        case "KeyH":
            this.recordKeys(e)
            this.soundBank.playH()
            this.aniBank.aniH()
            this.resetCanvas()
        break;

        case "KeyJ":
            this.recordKeys(e)
            this.soundBank.playJ()
            this.aniBank.aniJ()
            this.resetCanvas()
        break;

        case "KeyK":
            this.recordKeys(e)
            this.soundBank.playK()
            this.aniBank.aniK()
            this.resetCanvas()
        break;

        case "KeyL":
            this.recordKeys(e)
            this.soundBank.playL()
            this.aniBank.aniL()
            this.resetCanvas()
        break;

// bottom row

        case "KeyZ":
            this.recordKeys(e)
            this.soundBank.playZ()
            this.aniBank.aniZ()
            this.resetCanvas()
        break;

        case "KeyX":
            this.recordKeys(e)
            this.soundBank.playX()
            this.aniBank.aniX()
            this.resetCanvas()
        break;

        case "KeyC":
            this.recordKeys(e)
            this.soundBank.playC()
            this.aniBank.aniC()
            this.resetCanvas()
        break;

        case "KeyV":
            this.recordKeys(e)
            this.soundBank.playV()
            this.aniBank.aniV()
            this.resetCanvas()
        break;

        case "KeyB":
            this.recordKeys(e)
            this.soundBank.playB()
            this.aniBank.aniB()
            this.resetCanvas()
        break;

        case "KeyN":
            this.recordKeys(e)
            this.soundBank.playN()
            this.aniBank.aniN()
            this.resetCanvas()
        break;

        case "KeyM":
            this.recordKeys(e)
            this.soundBank.playM()
            this.aniBank.aniM()
            this.resetCanvas()
        break;
        }
    })
}};