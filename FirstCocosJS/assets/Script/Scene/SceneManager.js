/** @module SceneManager */

/** @type {GameManager} */
let GameManager;

/** 
 * 장면 관리자
 * 
 * @class
 */
const SceneManager = cc.Class(
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
            SceneManager.importModules();
            return GameManager.singleton().sceneManager;
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
        console.log("SceneManager.onLoad()");

        if(GameManager === undefined)
            GameManager = require("../GameManager");
    },

    start : function()
    {
        console.log("SceneManager.start()");
    },

    onDestroy : function()
    {
        console.log("SceneManager.onDestroy()");
    }
});

export default SceneManager;

//GameManager = require("../GameManager");
