  // okay, thought process, i do a create bank method that
    // creates all of the audio files in a bank
    // then i access each one using a method i.e. AudioBank.playQ and etc.
    // i'll make an object containing: object[key] = {context: context, 
    // source: source, sound: sound}

export default class AudioBank {
    constructor () {
        this.genAudioBank = {}
    }
    
    createGenAudioBankEle(letter) {
        console.log(letter)
        let ctx = new AudioContext
                
        let letterQuerySelectorId = ""
            letterQuerySelectorId = new String(letterQuerySelectorId + (`#${letter}`) + ('-id'))

        let source = document.querySelector(letterQuerySelectorId)
        
        console.log(ctx.destination)
        console.log(source)
        console.log(source instanceof HTMLMediaElement)
            // problem here
        console.log(letter)
        let sound = ctx.createMediaElementSource(source)
                console.log('finish initialize sound')
        console.log('initialize object')
        this.genAudioBank[letter] = {
            ctx: ctx, 
            source: source, 
            sound: sound
           };
        console.log('finish object initialization')
        this.genAudioBank[letter].sound.connect(this.genAudioBank[letter].ctx.destination)
        console.log('end')
    }

    createGenAudioBank (array) {
        array.forEach(letter => {this.createGenAudioBankEle(letter);});        
    }

    playQ() {
        this.genAudioBank['Q'].sound.play()
    }

    playW() {

    }

    playE() {

    }
    
    playR() {

    }
    
    playT() {

    }
    
    playY() {

    }
    
    playU() {

    }
    
    playI() {

    }
    
    playO() {

    }
    
    playP() {

    }
    
    playA() {

    }
    
    playS() {

    }
    
    playD() {

    }
    
    playF() {

    }
    
    playG() {

    }
    
    playH() {

    }
    
    playJ() {

    }
    
    playK() {

    }
    
    playL() {

    }
    
    playZ() {

    }
    
    playX() {

    }
    
    playC() {

    }
    
    playV() {

    }
    
    playB() {

    }
    
    playN() {

    }
    
    playM() {

    }
    

}

