import QAnimate from './animations/Q_animate.js'
export default class AniBank {
    constructor () {
        this.coreAniBank = {}
        this.initializeBank()
        // console.log(this.coreAniBank)
    }

    initializeBank () {
        const Qinstance = new QAnimate
            // console.log(Qinstance)
            this.coreAniBank['Q'] = {Qinstance: Qinstance}
            // console.log(this.coreAniBank['Q'])
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
        console.log(this.coreAniBank['Q'].Qinstance)
        
        this.coreAniBank['Q'].Qinstance.renderAni()
        requestAnimationFrame(this.aniQ)
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