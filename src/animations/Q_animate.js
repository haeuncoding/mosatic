// let mainObj = new Image(); 
// mainObj.src = './images/Q.png'

export default class QAnimate {

    constructor () {
        this.mainObj = new Image();
        this.mainObj.src = './images/Q.png'
    }

    draw () {
        const canvas = document.getElementById('canvas')
        const context = canvas.getContext('2d')

        context.drawImage(this.mainObj, 0, 0)
    }
}


// import * as THREE from '../../node_modules/three/build/three.module.js';

// export default class QAnimate {
//     constructor (){
//         this.canvas = document.querySelector('canvas')
//         this.properties = {}
//         this.setScene()
//         this.populate()
//     }

//     createScene () {
//         let scene = new THREE.Scene();
//         return scene
//     }

//     createCamera () {
//         let camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.6, 1200);
//         return camera;
//     }

//     createRenderer () {
//         let renderer = new THREE.WebGLRenderer({canvas: this.canvas, antialias: true});
//         return renderer;
//     }

//     setScene() {
//         let scene = this.createScene()
//         let camera = this.createCamera()
//         let renderer = this.createRenderer()
//         this.properties = {
//             scene: scene,
//             camera: camera,
//             renderer: renderer
//         };
//     }

//     populate() {
//         const ringGeo = new THREE.RingGeometry(22, 21)
//         const boxMaterial = new THREE.MeshLambertMaterial(0xFFFFFF)
//         // const boxMesh = new THREE.Mesh(ringGeo, boxMaterial)
//         // console.log(this.properties['scene'])
//         this.properties['scene'].add(ringGeo)
//         this.properties['camera'].position.z = 5;

//     }

//     renderAni() {
//         console.log(this.properties.camera)
//         this.properties.scene.rotation.z -= 0.005;
//         this.properties['camera'].rotation.x -= 0.01
//         this.properties['renderer'].render(this.properties['scene'], this.properties['camera'])
//         // window.requestAnimationFrame(this.renderAni)
//     }
// }

