/** @module GameOptionManager */

/** @type {GameManager} */
let GameManager;

/** 
 * 게임의 옵션 관리자
 * 
 * @class
 */
const GameOptionManager = cc.Class(
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
            GameOptionManager.importModules();
            return GameManager.singleton().gameOptionManager;
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
        console.log("GameOptionManager.onLoad()");

        if(GameManager === undefined)
            GameManager = require("../GameManager");
    },

    start : function()
    {
        console.log("GameOptionManager.start()");
    },

    onDestroy : function()
    {
        console.log("GameOptionManager.onDestroy()");
    }
});

export default GameOptionManager;

//GameManager = require("../GameManager");
