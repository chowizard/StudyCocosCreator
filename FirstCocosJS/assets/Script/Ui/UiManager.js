/** @module UiManager */

/** @type {GameManager} */
let GameManager;

/** 
 * 전체 사용자 인터페이스(UI)들의 관리자
 * 
 * @class
 */
const UiManager = cc.Class(
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
            UiManager.importModules();
            return GameManager.singleton().uiManager;
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
        console.log("UiManager.onLoad()");

        if(GameManager === undefined)
            GameManager = require("../GameManager");
    },

    start : function()
    {
        console.log("UiManager.start()");
    },

    onDestroy : function()
    {
        console.log("UiManager.onDestroy()");
    }
});

export default UiManager;

//GameManager = require("../GameManager");
