const GameManager = require("GameManager");

cc.Class(
{
    extends: cc.Component,

    properties :
    {
    },


    // LIFE-CYCLE CALLBACKS:


    onLoad : function()
    {
        console.log("SceneManager.onLoad()");
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
