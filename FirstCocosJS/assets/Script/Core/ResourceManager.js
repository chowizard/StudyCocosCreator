/** @module ResourceManager */

/** @type {GameManager} */
let GameManager;

/** 
 * 게임에서 사용하는 리소스 에셋 데이터들의 관리자
 * 
 * @class
 */
const ResourceManager = cc.Class(
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
            ResourceManager.importModules();
            return GameManager.singleton().resourceManager;
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
        testValue : 
        {
            default : 100,
            type : cc.Integer,
        }
    },


    // LIFE-CYCLE CALLBACKS:


    onLoad : function()
    {
        console.log("ResourceManager.onLoad()");

        ResourceManager.importModules();
    },

    start : function()
    {
        console.log("ResourceManager.start()");

        console.log("Test Value = " + GameManager.singleton().testValue);
        //console.log("Test Value = " + GameManager._singleton.testValue);
    },

    onDestroy : function()
    {
        console.log("ResourceManager.onDestroy()");
    }
});

export default ResourceManager;
