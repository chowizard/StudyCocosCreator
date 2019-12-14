cc.Class(
    {
        extends : cc.Component,
    
        properties :
        {
        },
    
    
        // LIFE-CYCLE CALLBACKS:
    
    
        onLoad : function()
        {
            console.log("CharacterAi.onLoad()");
        },
    
        start : function()
        {
            console.log("CharacterAi.start()");
        },
    
        update : function(deltaTime)
        {
        },
    
        lateUpdate : function()
        {
        },
    
        onDestory : function()
        {
            console.log("CharacterAi.onDestroy()");
        }
    });
    