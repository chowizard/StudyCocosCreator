//const GameManager = require("GameManager");

/** 
 * 게임에서 사용하는 리소스 에셋 데이터들의 관리자
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
        console.log("ResourceManager.onLoad()");
    },

    start : function()
    {
        console.log("ResourceManager.start()");
    },

    onDestroy : function()
    {
        console.log("ResourceManager.onDestroy()");
    }
});
