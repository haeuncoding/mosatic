let CONSTANTS = {
    KEY_ALPHABET: Array.from('QWERTYUIOPASDFGHJKLZXCVBNM')
}

import Reverb from './reverb'
export default class AudioBank {
    constructor () {
        this.coreAudioBank = {}
        this.irAudioData = document.querySelector("#church-ir-id")
        this.paused = []
        this.initializeReverb()
        this.reverb = new Reverb
        this.pauseWorkingQuestionMark = false
    }


    createAudioContext () {
        return new AudioContext
    }

    createAudioSource (letter) {
        let querySelectorId = ""
        querySelectorId += `#${letter}-id`
        return document.querySelector(querySelectorId)
    }

    createAudioSound (context, source) {
        return context.createMediaElementSource(source);
    }

    handleAudio (audioEle) {
        if (audioEle.paused) {
            audioEle.play();
        } else {
            audioEle.currentTime = 0;
        }
    }

    playFromPause () {
        this.pauseWorkingQuestionMark = true
        this.paused.forEach(letter => {
            if (this.coreAudioBank[letter].paused)
                {this.coreAudioBank[letter].play()}
            })
        console.log(this.pauseWorkingQuestionMark)
    }
    

    resetAllTime () {
        console.log('the inner machinations of my mind are an enigma')
        if (anyPaused) {
            CONSTANTS.KEY_ALPHABET.forEach(letter => {{
                this.coreAudioBank[letter].pause()
                this.coreAudioBank[letter].currentTime = 0
            }})
        }
    }

    pauseAll () {
        CONSTANTS.KEY_ALPHABET.forEach(letter => {
        this.coreAudioBank[letter].pause()
        if (this.coreAudioBank[letter].currentTime !== 0) {
            this.paused.push(letter)
        }
        })
        this.pauseWorkingQuestionMark = true
        console.log(this.pauseWorkingQuestionMark)
    }

    anyPaused () {
        let flag = false;
        CONSTANTS.KEY_ALPHABET.forEach(letter => {
            if (this.coreAudioBank[letter].currentTime !== 0 && this.coreAudioBank[letter].paused()) {
                flag = true;
                return flag;
            }
        })
        return flag;
    }

    createBank (array) {
        array.forEach(letter => {
                let ctx = this.createAudioContext()
                // console.log(ctx)
                // console.log('audio context created')
                let source = this.createAudioSource(letter)   
                // console.log(source)     
                // console.log('audio source created')
                let sound = this.createAudioSound(ctx, source)
                // console.log(sound)
                // console.log('audio sound created')
                this.coreAudioBank[letter] = {
                    ctx: ctx,
                    source: source, 
                    sound: sound
                };
                this.coreAudioBank[letter].sound.connect(this.coreAudioBank[letter].ctx.destination)
            });        
    }

// top row
    playQ () {
        this.handleAudio(this.coreAudioBank['Q'].source)
    }

    playW () {
        this.handleAudio(this.coreAudioBank['W'].source)
    }

    playE () {
        this.handleAudio(this.coreAudioBank['E'].source)
    }

    playR () {
        this.handleAudio(this.coreAudioBank['R'].source)

    }

    playT () {
        this.handleAudio(this.coreAudioBank['T'].source)

    }

    playY () {
        this.handleAudio(this.coreAudioBank['Y'].source)

    }

    playU () {
        this.handleAudio(this.coreAudioBank['U'].source)
    }

    playI () {
        this.handleAudio(this.coreAudioBank['I'].source)
    }

    playO () {
        this.handleAudio(this.coreAudioBank['O'].source)
    }

    playP () {
        this.handleAudio(this.coreAudioBank['P'].source)
    }

// middle row

    playA () {
        this.handleAudio(this.coreAudioBank['A'].source)
    }

    playS () {
        this.handleAudio(this.coreAudioBank['S'].source)
    }

    playD () {
        this.handleAudio(this.coreAudioBank['D'].source)
    }

    playF () {
        this.handleAudio(this.coreAudioBank['F'].source)
    }

    playG () {
        this.handleAudio(this.coreAudioBank['G'].source)
    }

    playH () {
        this.handleAudio(this.coreAudioBank['H'].source)
    }

    playJ () {
        this.handleAudio(this.coreAudioBank['J'].source)
    }

    playK () {
        this.handleAudio(this.coreAudioBank['K'].source)
    }

    playL () {
        this.handleAudio(this.coreAudioBank['L'].source)
    }

    // bottom row

    playZ () {
        this.handleAudio(this.coreAudioBank['Z'].source)
    }

    playX () {
        this.handleAudio(this.coreAudioBank['X'].source)
    }

    playC () {
        this.handleAudio(this.coreAudioBank['C'].source)
    }

    playV () {
        this.handleAudio(this.coreAudioBank['V'].source)
    }

    playB () {
        this.handleAudio(this.coreAudioBank['B'].source)
    }

    playN () {
        this.handleAudio(this.coreAudioBank['N'].source)    
    }

    playM () {
        this.handleAudio(this.coreAudioBank['M'].source)
    }

}

