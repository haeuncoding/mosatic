export default class GAnimate {
    constructor () {
        this.mainObj = new Image();
        this.mainObj.src = './src/animations/images/G.png'
        this.canvas = document.querySelector('canvas')
        this.context = this.canvas.getContext('2d')
        window.requestAnimationFrame(this.draw.bind(this))
    }

    draw() {
        setTimeout(() => {
            this.stopAnimation(this.reqAnim)
        }, 900)
        this.context.fillStyle = ('#95c88c', 0)
        this.context.fillRect(0, 0, window.innerWidth, window.innerHeight);
        this.context.drawImage(this.mainObj, 200, 250, (this.mainObj.width)/3, (this.mainObj.height)/3)
        this.context.translate(40 / 360, 40 / 360)
        this.context.rotate(-.004)
        this.context.translate(-40 /360, -40 / 360)
        this.reqAnim = window.requestAnimationFrame(this.draw.bind(this))
    }

    stopAnimation(reqAnim) {
        window.cancelAnimationFrame(reqAnim)
    }
}

    