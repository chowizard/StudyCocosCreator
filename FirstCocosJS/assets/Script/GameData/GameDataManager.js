cc.Class(
{
    extends: cc.Component,

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
