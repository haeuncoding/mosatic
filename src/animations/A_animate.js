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
        }, 2550)
        // this.context.clearRect(0, 0, window.innerWidth, window.innerHeight)
        this.context.fillStyle = ('#95c88c', 0)
        this.context.fillRect(0, 0, window.innerWidth, window.innerHeight);
        this.context.drawImage(this.mainObj, -500, 300, ((this.mainObj.width)), (this.mainObj.height))
        // this.context.rotate(.02)
        // this.context.scale(.1, .1)
        this.context.translate(40, 0)
        // this.context.save()
        this.reqAnim = window.requestAnimationFrame(this.draw.bind(this))
    }

    stopAnimation(reqAnim) {
        window.cancelAnimationFrame(reqAnim)
    }
}

    