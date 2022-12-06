let mainObj = new Image(); 
mainObj.src = './src/animations/images/Q.png'
const canvas = document.querySelector('canvas')
const context = canvas.getContext('2d')

export default class QAnimate {        
    constructor () {
        this.reqAnim = ""
        this.stop = 160
        this.images = []
        window.requestAnimationFrame(this.animate)
    }

    drawNewImage () {
        // context.clearRect(0, 0, canvas.innerWidth, canvas.innerHeight)
        context.clearRect(0, 0, canvas.innerWidth, canvas.innerHeight)
        context.fillStyle = '#95c88c'
        context.fillRect(0, 0, 1920, 1080)
        context.translate(-.01, -.01)
        context.drawImage(mainObj, 800, 1080, 300, 300)

    }

    animate () {
        
        context.clearRect(0, 0, canvas.innerWidth, canvas.innerHeight)
 
        this.drawNewImage()
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



