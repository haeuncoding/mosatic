// upper row
import QAnimate from './animations/Q_animate.js'
import WAnimate from './animations/W_animate.js'
import EAnimate from './animations/E_animate.js'
import RAnimate from './animations/R_animate.js'
import TAnimate from './animations/T_animate.js'
import YAnimate from './animations/Y_animate.js'
import UAnimate from './animations/U_animate.js'
import IAnimate from './animations/I_animate.js'
import OAnimate from './animations/O_animate.js'
import PAnimate from './animations/P_animate.js'
// middle row
import AAnimate from './animations/A_animate.js'
import SAnimate from './animations/S_animate.js'
import DAnimate from './animations/D_animate.js'
import FAnimate from './animations/F_animate.js'
import GAnimate from './animations/G_animate.js'
import HAnimate from './animations/H_animate.js'
import JAnimate from './animations/J_animate.js'
import KAnimate from './animations/K_animate.js'
import LAnimate from './animations/L_animate.js'
// bottom row
import ZAnimate from './animations/Z_animate.js'
import XAnimate from './animations/X_animate.js'
import CAnimate from './animations/C_animate.js'
import VAnimate from './animations/V_animate.js'
import BAnimate from './animations/B_animate.js'
import NAnimate from './animations/N_animate.js'
import MAnimate from './animations/M_animate.js'

export default class AniBank {
    constructor () {
        this.canvas = document.querySelector('canvas');
        this.context = this.canvas.getContext('2d');
    }
// top row
    aniQ () {
        let QAni = new QAnimate
    }

    aniW () {
        let WAni = new WAnimate
    }

    aniE () {
        let EAni = new EAnimate
    }

    aniR () {
        let RAni = new RAnimate
    }

    aniT () {
        let TAni = new TAnimate
    }

    aniY () {
        let YAni = new YAnimate
    }

    aniU () {
        let UAni = new UAnimate
    }

    aniI () {
        let IAni = new IAnimate
    }

    aniO () {
        let OAni = new OAnimate
    }

    aniP () {
        let PAni = new PAnimate
    }

// middle row

    aniA () {
        this.context.restore()

        let AAni = new AAnimate
    }

    aniS () {
        let SAni = new SAnimate
    }

    aniD () {
        let DAni = new DAnimate
    }

    aniF () {
        let FAni = new FAnimate
    }

    aniG () {
        let GAni = new GAnimate
    }

    aniH () {
        let HAni = new HAnimate
    }

    aniJ () {
        let JAni = new JAnimate
    }

    aniK () {
        let KAni = new KAnimate
    }

    aniL () {
        let LAni = new LAnimate
    }

// bottom row

    aniZ () {
        let ZAni = new ZAnimate
    }

    aniX () {
        let XAni = new XAnimate
    }

    aniC () {
        let CAni = new CAnimate
    }

    aniV () {
        let VAni = new VAnimate
    }

    aniB () {
        let BAni = new BAnimate
    }
    
    aniN () {
        let NAni = new NAnimate
    }

    aniM () {
        let MAni = new MAnimate
    }
}
