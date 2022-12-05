export default class AudioBank {
    constructor () {
        this.coreAudioBank = {}
    }
    
    // okay, thought process, i do a create bank method that
    // creates all of the audio files in a bank
    // then i access each one using a method i.e. AudioBank.playQ and etc.
    // i'll make an object containing: object[key] = {context: context, 
    // source: source, sound: sound}

    createAudioContext () {
        return new AudioContext
    }

    createAudioSource (letter) {
        let querySelectorId = ""
        querySelectorId += `#${letter}-id`
        console.log(querySelectorId)
        return document.querySelector(querySelectorId)
    }

    createAudioSound (context, source) {
        return context.createMediaElementSource(source);
    }

    createBank (array) {
        array.forEach(letter => {
                let ctx = this.createAudioContext()
                console.log(ctx)
                console.log('audio context created')
                let source = this.createAudioSource(letter)   
                console.log(source)     
                console.log('audio source created')
                let sound = this.createAudioSound(ctx, source)
                console.log(sound)
                console.log('audio sound created')
                this.coreAudioBank[letter] = {
                    ctx: ctx,
                    source: source, 
                    sound: sound
                };
                this.coreAudioBank[letter].sound.connect(this.coreAudioBank[letter].ctx.destination)
                console.log('end each loop')
            });        
    }

    playQ () {
        this.coreAudioBank['Q'].source.play()
    }

    playW () {
        this.coreAudioBank['W'].source.play()
    }

    playE () {
        this.coreAudioBank['E'].source.play()
    }

    playR () {
        this.coreAudioBank['R'].source.play()

    }

    playT () {
        this.coreAudioBank['T'].source.play()

    }

    playY () {
        this.coreAudioBank['Y'].source.play()

    }

    playU () {
        this.coreAudioBank['U'].source.play()
    }

    playI () {
        this.coreAudioBank['I'].source.play()
    }

    playO () {
        this.coreAudioBank['O'].source.play()
    }

    playP () {
        this.coreAudioBank['P'].source.play()
    }

    playA () {

    }

    playS () {

    }

    playD () {

    }

    playF () {

    }

    playG () {

    }

    playH () {

    }

    playJ () {

    }

    playK () {

    }

    playL () {

    }

    playZ () {

    }

    playX () {

    }

    playC () {

    }

    playV () {

    }

    playB () {

    }

    playN () {

    }

    playM () {

    }

}

