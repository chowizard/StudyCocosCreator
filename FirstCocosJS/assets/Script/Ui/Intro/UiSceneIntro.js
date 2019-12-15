/** 
 * 특정 장면의 UI들을 관리한다. (인트로 장면)
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
            console.log("UiSceneIntro.onLoad()");
        },
    
        start : function()
        {
            console.log("UiSceneIntro.start()");
        },
    
        update : function(deltaTime)
        {
        },
    
        lateUpdate : function()
        {
        },
    
        onDestory : function()
        {
            console.log("UiSceneIntro.onDestroy()");
        }
    });
    