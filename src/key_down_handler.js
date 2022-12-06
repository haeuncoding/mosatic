import AudioBank from './audio_bank.js'
import AniBank from './ani_bank.js';

let CONSTANTS = {
    KEY_ALPHABET: Array.from('QWERTYUIOPASDFGHJKLZXCVBNM')
}
export default class KeyDownHandler {
    constructor() {
        this.keys = [];
        // this.soundBank = new AudioBank
        // this.soundBank.createBank(CONSTANTS.KEY_ALPHABET)
        this.canvas = document.querySelector('canvas');
        this.context = this.canvas.getContext('2d');
        // this.context.fillStyle = '#95c88c'
        // this.context.fillRect(0, 0, 1920, 1080)  
        this.background_colors = ["#95c88c", "#967bb6", "#A7C7E7", "fdfd96",  "#FF6961"]

        this.aniBank = new AniBank
        this.addListeners()
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
            // this.soundBank.playQ()
            this.aniBank.aniQ()
            this.resetCanvas()

        break;
        
        case "KeyW":
            // this.soundBank.playW()
            this.aniBank.aniW()
            this.resetCanvas()
        break;

        case "KeyE":
            // this.soundBank.playE()
            this.aniBank.aniE()
            this.resetCanvas()
        break;

        case "KeyR":
            // this.soundBank.playR()
            this.aniBank.aniR()
            this.resetCanvas()
        break;

        case "KeyT":
            // this.soundBank.playT()
            this.aniBank.aniT()
            this.resetCanvas()
        break;

        case "KeyY":
            // this.soundBank.playY()
            this.aniBank.aniY()
            this.resetCanvas()
        break;

        case "KeyU":
            // this.soundBank.playU()
            this.aniBank.aniU()
            this.resetCanvas()
        break;

        case "KeyI":
            // this.soundBank.playI()
            this.aniBank.aniI()
            this.resetCanvas()
        break;

        case "KeyO":
            // this.soundBank.playO()
            this.aniBank.aniO()
            this.resetCanvas()
        break;

        case "KeyP":
            // this.soundBank.playP()
            this.aniBank.aniP()
            this.resetCanvas()
        break;

// middle row

        case "KeyA":
            // this.soundBank.playA()
            this.aniBank.aniA()
            this.resetCanvas()
        break;

        case "KeyS":
            // this.soundBank.playS()
            this.aniBank.aniS()
            this.resetCanvas()
        break;

        case "KeyD":
            // this.soundBank.playD()
            this.aniBank.aniD()
            this.resetCanvas()
        break;

        case "KeyF":
            // this.soundBank.playF()
            this.aniBank.aniF()
            this.resetCanvas()
        break;

        case "KeyG":
            // this.soundBank.playG()
            this.aniBank.aniG()
            this.resetCanvas()
        break;

        case "KeyH":
            // this.soundBank.playH()
            this.aniBank.aniH()
            this.resetCanvas()
        break;

        case "KeyJ":
            // this.soundBank.playJ()
            this.aniBank.aniJ()
            this.resetCanvas()
        break;

        case "KeyK":
            // this.soundBank.playK()
            this.aniBank.aniK()
            this.resetCanvas()
        break;

        case "KeyL":
            // this.soundBank.playL()
            this.aniBank.aniL()
            this.resetCanvas()
        break;

// bottom row

        case "KeyZ":
            // this.soundBank.playZ()
            this.aniBank.aniZ()
            this.resetCanvas()
        break;

        case "KeyX":
            // this.soundBank.playX()
            this.aniBank.aniX()
            this.resetCanvas()
        break;

        case "KeyC":
            // this.soundBank.playC()
            this.aniBank.aniC()
            this.resetCanvas()
        break;

        case "KeyV":
            // this.soundBank.playV()
            this.aniBank.aniV()
            this.resetCanvas()
        break;

        case "KeyB":
            // this.soundBank.playB()
            this.aniBank.aniB()
            this.resetCanvas()
        break;

        case "KeyN":
            // this.soundBank.playN()
            this.aniBank.aniN()
            this.resetCanvas()
        break;

        case "KeyM":
            // this.soundBank.playM()
            this.aniBank.aniM()
            this.resetCanvas()
        break;
        }
    })
}};