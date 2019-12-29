//const GameManager = require("GameManager");

/** 
 * 게임 스크립트 데이터로부터 불러오는 데이터 객체들의 관리자
 * @type {GameDataManager}
 */
const GameDataManager = cc.Class(
{
    extends : cc.Component,

    properties :
    {
    },


    // LIFE-CYCLE CALLBACKS:


    onLoad : function()
    {
        console.log("GameDataManager.onLoad()");
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
