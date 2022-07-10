/**
 * @file mofron-effect-color/index.js
 * @brief color effect for mofron
 * @license MIT
 */

module.exports = class extends mofron.class.Effect {
    /**
     * initialize effect
     * 
     * @param (mixed) color parameter
     *                dict: effect config
     * @short color
     * @type private
     */
    constructor (prm) {
        try {
            super();
            this.modname('Color');
            this.shortForm('color');
            this.transition(["background","color"]);

            /* init config */
            this.confmng().add("type", { type: "string", select: ["main", "base", "accent"], init: "main" });
            this.confmng().add("color", { type: "color", init:undefined });
	    /* set config */
	    if (undefined !== prm) {
                this.config(prm);
	    }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * effet contents
     * 
     * @param (mofron.class.Component) effect target component
     * @type private
     */
    contents (cmp) {
        try {
            cmp[this.type() + "Color"](this.color());
	} catch (e) {
            console.error(e.stack);
            throw e;
	}
    }
    
    /**
     * target color type setter/getter
     * 
     * @param (string) color type ['main'/'base'/'accent']
     * @return (string) color type
     * @type parameter
     */
    type (prm) {
        try {
            return this.confmng("type", prm);
	} catch (e) {
            console.error(e.stack);
            throw e;
	}
    }
    
    /**
     * effect color setter/getter
     * 
     * @param (mixed(color)) effect color
     * @return (string) color of style value
     * @type parameter
     */
    color (prm) {
        try {
            return this.confmng("color", prm);
	} catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
/* end of file */
