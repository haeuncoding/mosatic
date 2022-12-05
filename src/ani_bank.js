import * as THREE from '../node_modules/three/build/three.module.js';

export default class AniBank {
    constructor () {
        this.coreAniBank = {}
    }

    createScene (letter) {
        let nameString = ""
        nameString.concat(`${letter}`).concat("Scene")
        nameString = new THREE.Scene();
        return nameString
    }

    createCamera (letter) {
        let nameString = ""
        nameString.concat(`${letter}`).concat("Camera")
        nameString = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.6, 1200);
        return nameString;
    }

    createRenderer (letter) {
        let nameString = ""
        nameString.concat(`${letter}`).concat("Renderer")
        nameString = new THREE.WebGLRenderer({antialias: true});
        return nameString;
    }

    createBank (array) {
        array.forEach(letter => {
            let scene = this.createScene(letter)
            let camera = this.createCamera(letter)
            let renderer = this.createRenderer(letter)
            this.coreAudioBank[letter] = {
                scene: scene,
                camera: camera,
                renderer: renderer
                };
                console.log('end each loop')
            });     
        console.log(this.coreAniBank)   
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