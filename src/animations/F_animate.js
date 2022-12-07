export default class FAnimate {
    constructor () {
        this.mainObj = new Image();
        this.mainObj.src = './src/animations/images/F.png'
        this.canvas = document.querySelector('canvas')
        this.context = this.canvas.getContext('2d')
        window.requestAnimationFrame(this.draw.bind(this))
    }

    draw() {
        setTimeout(() => {
            this.stopAnimation(this.reqAnim)
        }, 2550)
        this.context.fillStyle = ('#95c88c', 0)
        this.context.fillRect(0, 0, window.innerWidth, window.innerHeight);
        this.context.drawImage(this.mainObj, -400, 0, (this.mainObj.width)/4, (this.mainObj.height)/4)
        this.context.translate(200 / 3600, 200 / 3600)
        this.context.translate(20, 5)
        this.reqAnim = window.requestAnimationFrame(this.draw.bind(this))
    }

    stopAnimation(reqAnim) {
        window.cancelAnimationFrame(reqAnim)
    }
}

    