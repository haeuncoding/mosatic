export default class DAnimate {
    constructor () {
        this.mainObj = new Image();
        this.mainObj.src = './src/animations/images/D.png'
        this.canvas = document.querySelector('canvas')
        this.context = this.canvas.getContext('2d')
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
        this.context.drawImage(this.mainObj, 500, 0, (this.mainObj.width)/4, (this.mainObj.height)/4)
        this.context.translate(this.positionX[0], this.positionY[0])
        this.shiftArrays()
        this.context.rotate(10)
        this.reqAnim = window.requestAnimationFrame(this.draw.bind(this))
    }

    stopAnimation(reqAnim) {
        window.cancelAnimationFrame(reqAnim)
    }
}

    