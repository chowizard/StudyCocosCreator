/** 
 * 캐릭터의 특정 기능을 담당하는 컴포넌트 (액션)
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
            console.log("CharacterAction.onLoad()");
        },
    
        start : function()
        {
            console.log("CharacterAction.start()");
        },
    
        update : function(deltaTime)
        {
        },
    
        lateUpdate : function()
        {
        },
    
        onDestory : function()
        {
            console.log("CharacterAction.onDestroy()");
        }
    });
    