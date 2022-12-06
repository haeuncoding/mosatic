export default class QAnimate {
    constructor () {
        this.mainObj = new Image();
        this.mainObj.src = './src/animations/images/Q.png'
        this.canvas = document.querySelector('canvas')
        console.log(this.canvas)
        this.context = this.canvas.getContext('2d')
        console.log(this.context)
        // window.requestAnimationFrame(this.draw.bind(this))
    }

    draw() {
        // this.context.globalCompositeOperation = 'source-over'
        // this.context.clearRect(0, 0, window.innerWidth, window.innerHeight)
        // this.context.fillStyle = '#95c88c'
        // this.context.fillRect(0, 0, window.innerWidth, window.innerHeight);
        // this.context.save()

        // this.context.translate((Math.PI / 60), Math.PI / 50)
        console.log(this.context)
        console.log(this.mainObj)
        this.context.drawImage(this.mainObj, 500, 500)
        // requestAnimationFrame(this.draw.bind(this))
    }
}

    