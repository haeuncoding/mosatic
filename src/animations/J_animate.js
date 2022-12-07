export default class JAnimate {
    constructor () {
        this.mainObj = new Image();
        this.mainObj.src = './src/animations/images/J.png'
        this.canvas = document.querySelector('canvas')
        this.context = this.canvas.getContext('2d')
        this.stop = 10 //250
        window.requestAnimationFrame(this.draw.bind(this))
        this.alpha = 0
    }

    draw() {
        setTimeout(() => {
            this.stopAnimation(this.reqAnim)
        }, 2550)
        // this.context.globalAlpha = this.alpha
        //         setInterval(() => {
        //     this.alpha++
        // }, 1)
        // this.context.globalAlpha = this.alpha
        this.context.fillStyle = ('#95c88c', 0)
        this.context.fillRect(0, 0, window.innerWidth, window.innerHeight);
        this.context.drawImage(this.mainObj, 1500, -300, (this.mainObj.width)/10, (this.mainObj.height)/10)
        // this.context.translate(200 / 3600, 200 / 3600)
        this.context.rotate(.01)
        this.context.translate(-200 /3600, -200 / 3600)
        // this.context.scale(0, -1)
        // this.context.translate(20, 0)
        // this.context.save()
        this.reqAnim = window.requestAnimationFrame(this.draw.bind(this))
    }

    stopAnimation(reqAnim) {
        window.cancelAnimationFrame(reqAnim)
    }
}

    