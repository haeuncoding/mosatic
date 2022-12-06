import QAnimate from './animations/Q_animate.js'

export default class AniBank {
    constructor () {
        this.coreAniBank = {}
        this.initializeBank()
        // console.log(this.coreAniBank)
    }

    initializeBank () {

    }

    aniQ () {
        let QAni = new QAnimate
        console.log(QAni)
        QAni.draw()
        console.log(QAni.draw())
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