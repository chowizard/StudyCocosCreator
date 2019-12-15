/** 
 * 캐릭터의 특정 기능을 담당하는 컴포넌트 (전투)
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
    