/** 
 * 캐릭터의 특정 기능을 담당하는 컴포넌트 (캐릭터 인공지능)
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
    