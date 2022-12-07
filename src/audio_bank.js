export default class AudioBank {
    constructor () {
        this.coreAudioBank = {}
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

