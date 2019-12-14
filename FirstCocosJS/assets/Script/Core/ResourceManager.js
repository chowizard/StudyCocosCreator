cc.Class(
{
    extends: cc.Component,

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
