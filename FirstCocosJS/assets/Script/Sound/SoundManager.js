/** @module SoundManager */

/** @type {GameManager} */
let GameManager;

/** 
 * 사운드 객체들의 관리자
 * 
 * @class
 */
const SoundManager = cc.Class(
{
    extends : cc.Component,


    statics : 
    {
        /**
         * 인스턴스 획득
         * @static
         * @public
         * @returns {ResourceManager}
         */
        get : function()
        {
            SoundManager.importModules();
            return GameManager.singleton().soundManager;
        },

        /**
         * 모듈들을 불러온다.
         * @static
         * @private
         * @return {void}
         */
        importModules : function()
        {
            cc.log("ResourceManager.importModules()");

            if(GameManager === undefined)
                GameManager = require("../GameManager");
        }
    },


    properties :
    {
    },


    // LIFE-CYCLE CALLBACKS:


    onLoad : function()
    {
        console.log("SoundManager.onLoad()");

        if(GameManager === undefined)
            GameManager = require("../GameManager");
    },

    start : function()
    {
        console.log("SoundManager.start()");
    },

    onDestroy : function()
    {
        console.log("SoundManager.onDestroy()");
    }
});

export default SoundManager;

//GameManager = require("../GameManager");
