// import * as THREE from '../../js/three';


export default class AniBank {
    constructor () {
        this.genAniBank = {}
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
        this.renderer = new THREE.WebGLRenderer();
        this.renderer.setSize( window.innerWidth, window.innerHeight)
        document.body.appendChild( this.renderer.domElement );
        this.animate();

    }

    // makeNewScene () {
    //     const canvas = document.querySelector('canvas');
    //     const context = canvas.getContext('2d');
    //     context.fillStyle = '#95c88c'
    //     context.fillRect(0, 0, 1920, 1080)

    //     const scene = new THREE.Scene();
    //     const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
    //     const renderer = new THREE.WebGLRenderer();
    //     renderer.setSize( window.innerWidth, window.innerHeight );
    //     document.body.appendChild( renderer.domElement );
        
    // }

    animate() {
	    requestAnimationFrame( animate );
	    this.renderer.render( scene, camera );
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