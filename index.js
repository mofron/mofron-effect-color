/**
 * @file mofron-effect-color/index.js
 * @author simpart
 */

/**
 * @class mofron.effect.Color
 * @brief color effect class
 */
mofron.effect.Color = class extends mofron.Effect {
    
    constructor (po, p2) {
        try {
            super();
            this.name('Color');
            this.prmMap('frmColor', 'toColor');
            this.prmOpt(po, p2);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    enable (tgt) {
        try {
            tgt.color(this.color()[1]);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    disable (tgt) {
        try {
            tgt.color(this.color()[0]);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    color (frm, to) {
        try {
            if (undefined === frm) {
                /* getter */
                return [this.frmColor(), this.toColor()];
            }
            /* setter */
            this.frmColor(frm);
            this.toColor(to);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    frmColor (prm) {
        try {
            if (undefined === prm) {
                /* getter */
                return (undefined === this.m_frmclr) ? new mofron.Color(255,255,255) : this.m_frmclr;
            }
            /* setter */
            if (true !== mofron.func.isInclude(prm, 'Color')) {
                throw new Error('invalid parameter');
            }
            this.m_frmclr = prm;
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    toColor (prm) {
        try {
            if (undefined === prm) {
                /* getter */
                return (undefined === this.m_toclr) ? new mofron.Color(255,255,255) : this.m_toclr;
            }
            /* setter */
            if (true !== mofron.func.isInclude(prm, 'Color')) {
                throw new Error('invalid parameter');
            }
            this.m_toclr = prm;
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
}
module.exports = mofron.effect.Color;
/* end of file */
