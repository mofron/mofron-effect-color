/**
 * @file mofron-effect-color/index.js
 * @author simpart
 */
const mf = require('mofron');
/**
 * @class mofron.effect.Color
 * @brief color effect class
 */
mf.effect.Color = class extends mf.Effect {
    
    constructor (po, p2) {
        try {
            super();
            this.name('Color');
            this.prmMap('color');
            this.prmOpt(po, p2);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * change enable color
     *
     * @note private method
     */
    enable (tgt) {
        try { tgt.color(this.color()[0]); } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * change disable color
     *
     * @note private method
     */
    disable (tgt) {
        try { tgt.color(this.color()[1]); } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * enable,disable color setter/getter
     *
     * @param p1 (string) enable color (css color value)
     * @param p1 (undefined) call as getter
     * @param p2 (string) disable color (css color value)
     * @return (string) color (css color value)
     */
    color (en, dis) {
        try {
            if (undefined !== en) {
                mf.func.getColor(en);
            }
            return this.execConfig('color', en, dis);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
module.exports = mf.effect.Color;
/* end of file */
