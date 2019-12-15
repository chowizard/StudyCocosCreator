/** 
 * 특정 UiScene 내에서, 화면 전체 단위로 보이게 하는 UI들의 층위(Layer)를 UiPage로 지정한다.
 * 모든 UiPage 객체들은 이 클래스를 상속하여 구현하여야 한다.
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
            console.log("UiPage.onLoad()");
        },
    
        start : function()
        {
            console.log("UiPage.start()");
        },
    
        update : function(deltaTime)
        {
        },
    
        lateUpdate : function()
        {
        },
    
        onDestory : function()
        {
            console.log("UiPage.onDestroy()");
        }
    });
    