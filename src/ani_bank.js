import QAnimate from './animations/Q_animate.js'
const canvas = document.querySelector('canvas')
const context = canvas.getContext('2d')
context.clearRect(0, 0, canvas.innerWidth, canvas.innerHeight)

export default class AniBank {
    constructor () {
        this.coreAniBank = {}
        this.initializeBank()
        // console.log(this.coreAniBank)
    }

    initializeBank () {

    }

    // createBank () {
    //     array.forEach(letter => {
    //         let action = (`${letter}`).concat('Animate')
    //         console.log(action)
    //         let temp = new action
    //         this.coreAniBank[letter] = {action}
    //         })     
    //     console.log(this.coreAniBank)   
    // }

    aniQ () {
        let QAni = new QAnimate
        for (let i = 0; i < 25000; i++)
        { QAni.animate() }
    }

}

// const scene = new THREE.Scene();
// const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.6, 1200);
// const renderer = new THREE.WebGLRenderer({antialias: true});

// window.addEventListener('resize', () => {
//     renderer.setSize(window.innerWidth, window.innerHeight);
//     camera.aspect = window.innerWidth / window.innerHeight;
//     camera.updateProjectionMatrix();
// })