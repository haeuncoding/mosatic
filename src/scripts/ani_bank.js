import * as THREE from '../../js/three.module.js';


export default class AniBank {
    constructor () {
        this.makeNewScene();
        this.makeObject();
        this.animate();

    }

    makeNewScene () {
    //     const canvas = document.querySelector('canvas');
    //     const context = canvas.getContext('2d');
    //     context.fillStyle = '#95c88c'
    //     context.fillRect(0, 0, 1920, 1080)

    //     const scene = new THREE.Scene();
    //     const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
    //     const renderer = new THREE.WebGLRenderer();
    //     renderer.setSize( window.innerWidth, window.innerHeight );
    //     document.body.appendChild( renderer.domElement );
        
        const mainCanvas = document.querySelector('canvas');
        // const context = mainCanvas.getContext('2d');
        this.scene = new THREE.Scene ({mainCanvas})
        this.camera = new THREE.PerspectiveCamera( 75, mainCanvas.innerWidth / mainCanvas.innerHeight, 0.1, 1000 );
        this.renderer = new THREE.WebGLRenderer({ canvas: mainCanvas});
        this.renderer.setClearColor("black")
        this.renderer.setSize( mainCanvas.innerWidth, mainCanvas.innerHeight)
        document.body.appendChild( this.renderer.domElement );

    }

    makeObject() {
        const geometry = new THREE.SphereGeometry( 100, 100, 100 );

        const wireframe = new THREE.WireframeGeometry( geometry );

        this.line = new THREE.LineSegments( wireframe );
        this.line.material.depthTest = false;
        this.line.material.opacity = 0.25;
        this.line.material.transparent = true;
        this.scene.add( this.line );


    }

    animate() {
	    requestAnimationFrame( this.animate.bind(this) );
        this.line.rotation.x += 0.01;
        this.line.rotation.y += 0.01;
            this.renderer.render( this.scene, this.camera );
    }
    
    createGenAniBankEle(letter) {
    
    }

    createGenAniBank (array) {
        array.forEach(letter => {this.createGenAniBankEle(letter);});        
    }

    playQ() {

    }

    playW() {

    }

    playE() {

    }
    
    playR() {

    }
    
    playT() {

    }
    
    playY() {

    }
    
    playU() {

    }
    
    playI() {

    }
    
    playO() {

    }
    
    playP() {

    }
    
    playA() {

    }
    
    playS() {

    }
    
    playD() {

    }
    
    playF() {

    }
    
    playG() {

    }
    
    playH() {

    }
    
    playJ() {

    }
    
    playK() {

    }
    
    playL() {

    }
    
    playZ() {

    }
    
    playX() {

    }
    
    playC() {

    }
    
    playV() {

    }
    
    playB() {

    }
    
    playN() {

    }
    
    playM() {

    }
    
}