export default class VAnimate {
    constructor () {
        this.mainObj = new Image();
        this.mainObj.src = './src/animations/images/V.png'
        this.canvas = document.querySelector('canvas')
        this.context = this.canvas.getContext('2d')
        this.stop = 10 //250
        window.requestAnimationFrame(this.draw.bind(this))
    }

    draw() {
        setTimeout(() => {
            this.stopAnimation(this.reqAnim)
        }, 2550)
        this.context.fillStyle = ('#95c88c', 0)
        this.context.fillRect(0, 0, window.innerWidth, window.innerHeight);
        this.context.drawImage(this.mainObj, 50, 0, (this.mainObj.width), (this.mainObj.height))
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

    