//const GameManager = require("GameManager");

/** 
 * 전체 사용자 인터페이스(UI)들의 관리자
 */
cc.Class(
{
    extends : cc.Component,

    properties :
    {
    },


    // LIFE-CYCLE CALLBACKS:


    onLoad : function()
    {
        console.log("UiManager.onLoad()");
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
