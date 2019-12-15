/** 
 * 특정 장면의 UI들을 관리한다. (로딩 장면)
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
            console.log("UiSceneLoading.onLoad()");
        },
    
        start : function()
        {
            console.log("UiSceneLoading.start()");
        },
    
        update : function(deltaTime)
        {
        },
    
        lateUpdate : function()
        {
        },
    
        onDestory : function()
        {
            console.log("UiSceneLoading.onDestroy()");
        }
    });
    