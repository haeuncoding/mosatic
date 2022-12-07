export default class IAnimate {
    constructor () {
        this.mainObj = new Image();
        this.mainObj.src = './src/animations/images/I.png'
        this.canvas = document.querySelector('canvas')
        this.context = this.canvas.getContext('2d')
        this.stop = 10 //250
        window.requestAnimationFrame(this.draw.bind(this))
    }

    draw() {
        setTimeout(() => {
            this.stopAnimation(this.reqAnim)
        }, 10070)
        this.context.fillStyle = ('#95c88c', 0)
        this.context.fillRect(0, 0, window.innerWidth, window.innerHeight);
        this.context.drawImage(this.mainObj, 860, 1080, (this.mainObj.width)/10, (this.mainObj.height)/10)
        // this.context.translate(200 / 3600, 200 / 3600)
        this.context.rotate(-.9)
        // this.context.translate(-200 /3600, -200 / 3600)
        // this.context.scale(.1, .1)
        this.context.translate(20, 0)
        // this.context.save()
        this.reqAnim = window.requestAnimationFrame(this.draw.bind(this))
    }

    stopAnimation(reqAnim) {
        window.cancelAnimationFrame(reqAnim)
    }
}

    