class AudioBank {
    constructor () {
        this.createBank()
        this.audioBank = {}
    }
    
    // okay, thought process, i do a create bank method that
    // creates all of the audio files in a bank
    // then i access each one using a method i.e. AudioBank.playQ and etc.
    // i'll make an object containing: object[key] = {context: context, 
    // source: source, sound: sound}
    createBank () {
        const keyAlphabet = Array.from('QWERTYUIOPASDFGHJKLZXCVBNM')
            keyAlphabet.forEach(letter => {
                this.audioBank[letter] = {
                    ctx: `audioContext${letter}` = newAudioContext(), 
                    source: `${letter.toLowerCase}Source` = document.querySelector(`#${letter.toLowerCase}-id`), 
                    sound: `${letter.toLowerCase}Sound` = `audioContext${letter}`.createMediaElementSource(`${letter.toLowerCase}Source`)
                };
                this.audioBank[letter].sound.connect(ctx.destination)
            });        
    }

}

