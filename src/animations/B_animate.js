export default class BAnimate {
    constructor () {
        this.mainObj = new Image();
        this.mainObj.src = './src/animations/images/B.png'
        this.canvas = document.querySelector('canvas')
        this.context = this.canvas.getContext('2d')
        window.requestAnimationFrame(this.draw.bind(this))
    }

    draw() {
        setTimeout(() => {
            this.stopAnimation(this.reqAnim)
        }, 15000)
        this.context.fillStyle = ('#95c88c', 0)
        this.context.fillRect(0, 0, window.innerWidth, window.innerHeight);
        this.context.drawImage(this.mainObj, 250, -30, (this.mainObj.width)/3, (this.mainObj.height)/3)
        this.context.translate(800, 800)
        this.context.rotate(.001)
        this.context.translate(-800, -800)
        this.reqAnim = window.requestAnimationFrame(this.draw.bind(this))
    }

    stopAnimation(reqAnim) {
        window.cancelAnimationFrame(reqAnim)
    }
}

    