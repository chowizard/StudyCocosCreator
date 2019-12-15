/** 
 * 캐릭터의 특정 기능을 담당하는 컴포넌트 (UI 상호작용)
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
        console.log("CharacterUi.onLoad()");
    },

    start : function()
    {
        console.log("CharacterUi.start()");
    },

    update : function(deltaTime)
    {
    },

    lateUpdate : function()
    {
    },

    onDestory : function()
    {
        console.log("CharacterUi.onDestroy()");
    }
});
