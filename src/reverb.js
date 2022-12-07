export default class Reverb {
    constructor(context) {
        this.context = context;
        this.effect = this.context.createConvolver();
        this.reverbTime = reverbTime;
        this.attack = 0;
        this.decay = 0.0;
        this.release = reverbTime/3;
 
        this.preDelay = this.context.createDelay(reverbTime);
        this.preDelay.delayTime.setValueAtTime(preDelay,    this.context.currentTime);
        this.multitap = [];
        for(let i = 2; i > 0; i--) {
        this.multitap.push(this.context.createDelay(reverbTime));
        }
        this.multitap.map((t,i)=>{
        if(this.multitap[i+1]) {
            t.connect(this.multitap[i+1])
        }
        t.delayTime.setValueAtTime(0.001+(i*(preDelay/2)), this.context.currentTime);
        })
 
        this.multitapGain = this.context.createGain();
        this.multitap[this.multitap.length-1].connect(this.multitapGain);
        this.multitapGain.gain.value = 0.2;
    
        this.multitapGain.connect(this.output);
        this.wet = this.context.createGain();
    
        this.input.connect(this.wet);
        this.wet.connect(this.preDelay);
        this.wet.connect(this.multitap[0]);
        this.preDelay.connect(this.effect);
        this.effect.connect(this.output);
    
        this.renderTail();
    }
    
    renderTail () {
    const tailContext = new OfflineAudioContext(2, this.context.sampleRate * this.reverbTime, this.context.sampleRate);
    const tailOsc = new Noise(tailContext, 1);
          tailOsc.init();
          tailOsc.connect(tailContext.destination);
          tailOsc.attack = this.attack;
          tailOsc.decay = this.decay;
          tailOsc.release = this.release;
 
        setTimeout(()=>{
      tailContext.startRendering().then((buffer) => {
        this.effect.buffer = buffer;
      });
 
      tailOsc.on({frequency: 500, velocity: 127});
      tailOsc.off();
    }, 20);
}
}