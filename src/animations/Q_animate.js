let mainObj = new Image(); 
mainObj.src = './src/animations/images/Q.png'
const canvas = document.querySelector('canvas')
const context = canvas.getContext('2d')

export default class QAnimate {        
    constructor () {
        this.reqAnim = ""
        this.stop = 160
        this.images = []
    }
    draw () {
        context.clearRect(0, 0, canvas.innerWidth, canvas.innerHeight)

        let image = this.drawImage()



    }

    drawImage () {
        // context.clearRect(0, 0, canvas.innerWidth, canvas.innerHeight)
        context.translate(-.01, -.01)
        context.drawImage(mainObj, 800, 1080, 300, 300)

        context.clearRect(0, 0, canvas.innerWidth, canvas.innerHeight)
    }

    animate () {
        
        context.clearRect(0, 0, canvas.innerWidth, canvas.innerHeight)
 
        this.drawImage()
        // this.changeOpacity()
    }

    stopAnimation(reqAnim) {
        window.cancelAnimationFrame(reqAnim)
    }

// fade in loop
// push images to array
// fade out apply yo each incrementally



}

        // context.globalAlpha = 1

        // context.translate(-1, -1)
        // globalReset resets alpha
        // setTimeout(() => {context.clearRect(800, 800, mainObj.width + 800, mainObj.height + 800)
        // console.log(mainObj, 'after chain')}, 5000)  
                // context.globalAlpha = alpha;
        // context.drawImage(mainObj, 960, 540, 200, 200)



