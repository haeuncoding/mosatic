export default class AAnimate {
    constructor () {
        this.mainObj = new Image();
        this.mainObj.src = './src/animations/images/A.png'
        this.canvas = document.querySelector('canvas')
        this.context = this.canvas.getContext('2d')
        window.requestAnimationFrame(this.draw.bind(this))
    }

    draw() {
        this.context.restore()
        setTimeout(() => {
            this.stopAnimation(this.reqAnim)
        }, 4550)
        this.context.fillStyle = ('#95c88c', 0)
        this.context.fillRect(0, 0, window.innerWidth, window.innerHeight);
        this.context.drawImage(this.mainObj, -500, 300, ((this.mainObj.width) / 3), (this.mainObj.height) / 3)
        this.context.translate(10, 0)
        this.reqAnim = window.requestAnimationFrame(this.draw.bind(this))
    }

    stopAnimation(reqAnim) {
        window.cancelAnimationFrame(reqAnim)
    }
}

    