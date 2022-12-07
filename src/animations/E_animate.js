export default class EAnimate {
    constructor () {
        this.mainObj = new Image();
        this.mainObj.src = './src/animations/images/E.png'
        this.canvas = document.querySelector('canvas')
        this.context = this.canvas.getContext('2d')
        this.stop = 10 //250
        window.requestAnimationFrame(this.draw.bind(this))
    }

    draw() {
        setTimeout(() => {
            this.stopAnimation(this.reqAnim)
        }, 8000)
        this.context.fillStyle = ('#95c88c', 0)
        this.context.fillRect(0, 0, window.innerWidth, window.innerHeight);
        this.context.drawImage(this.mainObj, 750, 0, (this.mainObj.width)/4, (this.mainObj.height)/4)
        // this.context.translate(200 / 3600, 200 / 3600)
        // this.context.rotate(.01)
        // this.context.translate(-200 /3600, -200 / 3600)
        // this.context.scale(.1, .1)
        this.context.translate(0, 4)
        // this.context.rotate()

        // this.context.save()
        this.reqAnim = window.requestAnimationFrame(this.draw.bind(this))
    }

    stopAnimation(reqAnim) {
        window.cancelAnimationFrame(reqAnim)
    }
}

    