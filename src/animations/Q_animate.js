export default class QAnimate {
    constructor () {
        this.mainObj = new Image();
        this.mainObj.src = './src/animations/images/Q.png'
        this.canvas = document.querySelector('canvas')
        this.context = this.canvas.getContext('2d')
        this.stop = 10 //250
        window.requestAnimationFrame(this.draw.bind(this))
    }

    draw() {
        setTimeout(() => {
            this.stopAnimation(this.reqAnim)
        }, 2550)
        this.context.clearRect(0, 0, window.innerWidth, window.innerHeight)
        this.context.fillStyle = '#95c88c'
        this.context.fillRect(0, 0, window.innerWidth, window.innerHeight);
        this.context.drawImage(this.mainObj, 860, 0, 300, 300)
        // this.context.translate(200 / 3600, 200 / 3600)
        this.context.rotate(.01)
        // this.context.translate(-200 /3600, -200 / 3600)
        // this.context.scale(.1, .1)
        // this.context.translate(20, 0)
        // this.context.save()
        this.reqAnim = window.requestAnimationFrame(this.draw.bind(this))
    }

    stopAnimation(reqAnim) {
        window.cancelAnimationFrame(reqAnim)
    }
}

    