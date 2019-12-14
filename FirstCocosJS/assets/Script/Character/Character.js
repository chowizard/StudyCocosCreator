cc.Class(
{
    extends : cc.Component,

    properties :
    {
    },


    // LIFE-CYCLE CALLBACKS:


    onLoad : function()
    {
        console.log("Character.onLoad()");
    },

    start : function()
    {
        console.log("Character.start()");
    },

    update : function(deltaTime)
    {
    },

    lateUpdate : function()
    {

    },

    onDestory : function()
    {
        console.log("Character.onDestroy()");
    }
});
