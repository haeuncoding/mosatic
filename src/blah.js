class keyDownHandler {
    constructor(){
    this.keys = [];
    
    window.addEventListener('keydown', function(e){
        e.preventDefault()
        e.stopImmediatePropagation()

        console.log(e.code)
        switch(e.code) {
        case "KeyQ":
            qSound.play()
        break;
        
        case "KeyW":
        break;

        case "KeyE":
        break;

        case "KeyR":
        break;

        case "KeyT":
        break;

        case "KeyY":
        break;

        case "KeyU":
        break;

        case "KeyI":
        break;

        case "KeyO":
        break;

        case "KeyP":
        break;

        case "KeyA":
        break;

        case "KeyS":
        break;

        case "KeyD":
        break;

        case "KeyF":
        break;

        case "KeyG":
        break;

        case "KeyH":
        break;

        case "KeyJ":
        break;

        case "KeyK":
        break;

        case "KeyL":
        break;

        case "KeyZ":
        break;

        case "KeyX":
        break;

        case "KeyC":
        break;

        case "KeyV":
        break;

        case "KeyB":
        break;

        case "KeyN":
        break;

        case "KeyM":
        break;
    }});
}};