cc.Class(
    {
        extends : cc.Component,
    
        properties :
        {
        },
    
    
        // LIFE-CYCLE CALLBACKS:
    
    
        onLoad : function()
        {
            console.log("CharacterCombat.onLoad()");
        },
    
        start : function()
        {
            console.log("CharacterCombat.start()");
        },
    
        update : function(deltaTime)
        {
        },
    
        lateUpdate : function()
        {
        },
    
        onDestory : function()
        {
            console.log("CharacterCombat.onDestroy()");
        }
    });
    