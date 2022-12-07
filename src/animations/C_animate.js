export default class CAnimate {
    constructor () {
        this.mainObj = new Image();
        this.mainObj.src = './src/animations/images/C.png'
        this.canvas = document.querySelector('canvas')
        this.context = this.canvas.getContext('2d')
        window.requestAnimationFrame(this.draw.bind(this))
    }

    draw() {
        setTimeout(() => {
            this.stopAnimation(this.reqAnim)
        }, 2000)
        this.context.fillStyle = ('#95c88c', 0)
        this.context.fillRect(0, 0, window.innerWidth, window.innerHeight);
        this.context.drawImage(this.mainObj, 500, 1000, (this.mainObj.width)/5.5, (this.mainObj.height)/5.5)
        this.context.translate(0, -50)
        this.context.rotate(.031)
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

    