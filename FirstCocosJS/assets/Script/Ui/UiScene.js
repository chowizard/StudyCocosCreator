/** 
 * 특정한 장면 객체에서 사용하는 전체 UI들을 관리하는 객체를 UiScene으로 지정한다.
 * 모든 UiScene들은 이 객체를 상속하여 구현하여야 한다.
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
            console.log("UiScene.onLoad()");
        },
    
        start : function()
        {
            console.log("UiScene.start()");
        },
    
        update : function(deltaTime)
        {
        },
    
        lateUpdate : function()
        {
        },
    
        onDestory : function()
        {
            console.log("UiScene.onDestroy()");
        }
    });
    