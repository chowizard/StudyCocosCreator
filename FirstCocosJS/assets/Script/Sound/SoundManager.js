//const GameManager = require("GameManager");

/** 
 * 사운드 객체들의 관리자
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
        console.log("SoundManager.onLoad()");
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
