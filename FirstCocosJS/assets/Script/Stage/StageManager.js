//const GameManager = require("GameManager");

/** 
 * 스테이지의 관리자
 */
cc.Class(
{
    extends : cc.Component,

    properties:
    {
    },


    // LIFE-CYCLE CALLBACKS:


    onLoad : function()
    {
        console.log("StageManager.onLoad()");
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
