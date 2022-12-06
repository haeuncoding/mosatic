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
        }, 4600)
        this.context.fillStyle = ('#95c88c', 0)
        this.context.fillRect(0, 0, window.innerWidth, window.innerHeight);
        this.context.drawImage(this.mainObj, 590, -30, 700, 700)
        this.context.translate(800, 800)
        this.context.rotate(.01)
        this.context.translate(-800, -800)
        // this.context.scale(.1, .1)
        // this.context.translate(300, 40)
        // this.context.scale(.2, .2)
        // this.context.save()
        this.reqAnim = window.requestAnimationFrame(this.draw.bind(this))
    }

    stopAnimation(reqAnim) {
        window.cancelAnimationFrame(reqAnim)
    }
}

    