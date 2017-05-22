/**
 * @file mofron-effect-color/index.js
 * @author simpart
 */

/**
 * @class mofron.effect.Color
 * @brief color effect class
 */
mofron.effect.Color = class extends mofron.Effect {
    
    constructor (po_clr1, clr2) {
        try {
            super();
            this.name('Color');
            this.prmOpt(
                (true === mofron.func.isInclude(po_clr1, 'Color')) ?
                    { color : new mofron.Param(po_clr1, clr2) } : po_clr1
            );
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    enable (tgt) {
        try {
            let chg_clr = this.color()[1];
            if ((null === chg_clr) && (null !== this.themeIdx())) {
                chg_clr = tgt.theme().color(this.themeIdx());
            }
            
            if (null !== chg_clr) {
                if ('function' === typeof tgt['color']) {
                    tgt.color(chg_clr);
                } else {
                    tgt.style({
                        background : chg_clr.getStyle()
                    });
                }
            }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    disable (tgt) {
        try {
            let rep_clr = this.color()[0];
            if (null !== rep_clr) {
                if ('function' === typeof tgt['color']) {
                    tgt.color(rep_clr);
                } else {
                    tgt.style({
                        background : rep_clr.getStyle()
                    });
                }
            }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    color (from, to) {
        try {
            if (undefined === from) {
                /* getter */
                return (undefined === this.m_color) ? [null,null] : this.m_color;
            }
            /* setter */
            if (undefined === this.m_color) {
                this.m_color = new Array(null,null)
            }
            if ( ((undefined !== from) && (false === mofron.func.isInclude(from, 'Color'))) ||
                 ((undefined !== to)   && (false === mofron.func.isInclude(to, 'Color')))  ) {
                throw new Error('invalid parameter');
            }
            if (undefined !== from) {
                this.m_color[0] = from;
            }
            if (undefined !== to) {
                this.m_color[1] = to;
            }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    themeIdx (idx) {
        try {
            if (undefined === idx) {
                /* getter */
                return (undefined === this.m_thmidx) ? null : this.m_thmidx;
            }
            /* setter */
            if ('number' !== typeof idx) {
                throw new Error('invalid parameter');
            }
            this.m_thmidx = idx;
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
mofron.effect.color = {};
module.exports = mofron.effect.Color;
