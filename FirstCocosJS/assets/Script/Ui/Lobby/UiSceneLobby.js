/** 
 * 특정 장면의 UI들을 관리한다. (로비 장면)
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
            console.log("UiSceneLobby.onLoad()");
        },
    
        start : function()
        {
            console.log("UiSceneLobby.start()");
        },
    
        update : function(deltaTime)
        {
        },
    
        lateUpdate : function()
        {
        },
    
        onDestory : function()
        {
            console.log("UiSceneLobby.onDestroy()");
        }
    });
    