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
        }, 4600)
        this.context.fillStyle = ('#95c88c', 0)
        this.context.fillRect(0, 0, window.innerWidth, window.innerHeight);
        this.context.drawImage(this.mainObj, 1900, 0, 7000, 1000)
        this.context.translate(-20, 0)
        // this.context.rotate(.01)
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

    