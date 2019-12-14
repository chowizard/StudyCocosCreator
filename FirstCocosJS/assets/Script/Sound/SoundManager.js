cc.Class(
{
    extends: cc.Component,

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
