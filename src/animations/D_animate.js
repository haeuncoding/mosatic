export default class DAnimate {
    constructor () {
        this.mainObj = new Image();
        this.mainObj.src = './src/animations/images/D.png'
        this.canvas = document.querySelector('canvas')
        this.context = this.canvas.getContext('2d')
        this.stop = 10 //250
        window.requestAnimationFrame(this.draw.bind(this))
        this.positionX = [100, -100, 105, -105, 105]
        this.positionY = [100, -100, 105, -105, 105]
    }

    shiftArrays () {
        let shift = this.positionX.shift()
        this.positionX.push(shift)
        let shift2 = this.positionY.shift()
        this.positionY.push(shift2)
    }

    draw() {
        setTimeout(() => {
            this.stopAnimation(this.reqAnim)
        }, 2550)
        // this.context.fillStyle = ('#95c88c', 0)
        // this.context.fillRect(0, 0, window.innerWidth, window.innerHeight);
        this.context.drawImage(this.mainObj, 860, 0, (this.mainObj.width)/2, (this.mainObj.height)/2)
        this.context.translate(this.positionX[0], this.positionY[0])
        this.shiftArrays()
        this.context.rotate(10)
        // this.context.translate(-200 /3600, -200 / 3600)
        // this.context.scale(-2, -2)
        // this.context.translate(20, 0)
        // this.context.save()
        this.reqAnim = window.requestAnimationFrame(this.draw.bind(this))
    }

    stopAnimation(reqAnim) {
        window.cancelAnimationFrame(reqAnim)
    }
}

    