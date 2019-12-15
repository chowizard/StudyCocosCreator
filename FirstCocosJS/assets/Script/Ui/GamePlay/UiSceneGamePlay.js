/** 
 * 특정 장면의 UI들을 관리한다. (게임 플레이 장면)
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
            console.log("UiSceneGamePlay.onLoad()");
        },
    
        start : function()
        {
            console.log("UiSceneGamePlay.start()");
        },
    
        update : function(deltaTime)
        {
        },
    
        lateUpdate : function()
        {
        },
    
        onDestory : function()
        {
            console.log("UiSceneGamePlay.onDestroy()");
        }
    });
    