/** 
 * 특정한 동작을 담당하는 UI들의 뭉치들을 UiForm 단위로 지정한다.
 * 모든 UiForm 객체들은 이 클래스를 상속하여 구현하여야 한다.
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
            console.log("UiForm.onLoad()");
        },
    
        start : function()
        {
            console.log("UiForm.start()");
        },
    
        update : function(deltaTime)
        {
        },
    
        lateUpdate : function()
        {
        },
    
        onDestory : function()
        {
            console.log("UiForm.onDestroy()");
        }
    });
    