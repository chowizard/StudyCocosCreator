/** @module StageManager */

/** @type {GameManager} */
let GameManager;

/** 
 * 스테이지의 관리자
 * 
 * @class
 */
const StageManager = cc.Class(
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
            StageManager.importModules();
            return GameManager.singleton().stageManager;
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


    properties:
    {
    },


    // LIFE-CYCLE CALLBACKS:


    onLoad : function()
    {
        console.log("StageManager.onLoad()");

        if(GameManager === undefined)
            GameManager = require("../GameManager");
    },

    start : function()
    {
        console.log("StageManager.start()");
    },

    onDestroy : function()
    {
        console.log("StageManager.onDestroy()");
    }
});

export default StageManager;

//GameManager = require("../GameManager");
