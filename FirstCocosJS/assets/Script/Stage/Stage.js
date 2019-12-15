/** 
 * 특정한 하나의 스테이지의 내용들을 관리한다.
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
            console.log("Stage.onLoad()");
        },
    
        start : function()
        {
            console.log("Stage.start()");
        },
    
        update : function(deltaTime)
        {
        },
    
        lateUpdate : function()
        {
        },
    
        onDestory : function()
        {
            console.log("Stage.onDestroy()");
        }
    });
    