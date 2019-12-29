/** @module GameDataManager */

/** @type {GameManager} */
let GameManager;

/** 
 * 게임 스크립트 데이터로부터 불러오는 데이터 객체들의 관리자
 * 
 * @class
 */
const GameDataManager = cc.Class(
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
            GameDataManager.importModules();
            return Game,Manager.singleton().gameDataManager;
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
        console.log("GameDataManager.onLoad()");

        if(GameManager === undefined)
            GameManager = require("../GameManager");
    },

    start : function()
    {
        console.log("GameDataManager.start()");
    },

    onDestroy : function()
    {
        console.log("GameDataManager.onDestroy()");
    }
});

export default GameDataManager;

//GameManager = require("../GameManager");
