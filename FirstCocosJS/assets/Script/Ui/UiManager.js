cc.Class(
{
    extends: cc.Component,

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
