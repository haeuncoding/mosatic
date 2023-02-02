![mosatic splash](https://github.com/haeuncreative/mosatic/blob/state-three/read_me_imgs/Mosatic_Splash.png)

Mosatic is a Javascript app that allows users to create pleasant and fun music with just their computer keyboard.

# Live Link
[Mosatic Live Link](https://haeuncreative.github.io/mosatic/)

# Background

This music app is a way for anyone to make music, with preprogrammed chords and percussive elements that are mapped to keys on a keyboard. Inspired by Lullatone's Patatap and Typatone, as well as the playful audio aesthetics of Chase Bliss and digdugDIY, it will feature a variety of sounds, though it will be focused on more soothing and calming sounds, with a bit of playfulness in between. Each key, in addition, will have animations associated with it as well. The app will also feature a recording aspect where it will take note of keystrokes, as well as the length of time between each keystroke. It will replay the animation associated with each key, as well as their sounds.

# Functionality & MVPs
In Mosatic, users will be able to:
- Play a variety of sounds using a computer keyboard
- Be able to playback what they create both musically and through the animations.
- Be able to create a cohesive animation using their keystrokes.
- They will be able to layer sounds and animations.

# How to Use (or Play):
All 26 alphabetical keys are mapped to an animation and audiobyte. Press one to trigger it. If you would like to record your masterpiece, press the record button at the bottom. It will darken, indicating that Mosatic is armed for recording. When are you finished recording, simply click the record button again, and it will lighten - indicating that Mosatic is no longer armed for recording. Then click play to playback what you've just created!
![mosatic interface](https://github.com/haeuncreative/mosatic/blob/state-three/read_me_imgs/Mosatic%20Diagram.png)

# Folder Structure
├── dist                  
├── node_modules                   
├── read_me_imgs   
├── sounds   
├── src      
└── README.md

# Technical Implementation
Key Mapping:
  - Each key is mapped to an animation and a sound, or for the spacebar, just changing the canvas.
  ```
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
 ```
Playback and Recording:
- The user can record and play back their musical creations.
```
recordKeys(e) {
    if (this.recording) {
        this.keys.push(e)
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
```
# Tech/Libraries/APIs

- Web Audio API
  - https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API/
- Keyboard Event
  - https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/code
- Sounds made with FL Studio, and the following synths and VSTs:
      - Serum 
      - Lokomotiv (free)
      - Digits (free)
      - ValhallaDSP SuperMassive (free)
      - ValhallaDSP FreqModulator (free)

# To-Do
- Implement pause and stop functions.
- Implement reverb option with wet/dry mix.
- The play function can only play a recording once, in the future it will be able to playback until the user has decided to delete the recording queue.

