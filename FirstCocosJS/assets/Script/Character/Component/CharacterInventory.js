/** 
 * 캐릭터의 특정 기능을 담당하는 컴포넌트 (아이템 인벤토리)
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
        console.log("CharacterInventory.onLoad()");
    },

    start : function()
    {
        console.log("CharacterInventory.start()");
    },

    update : function(deltaTime)
    {
    },

    lateUpdate : function()
    {
    },

    onDestory : function()
    {
        console.log("CharacterInventory.onDestroy()");
    }
});
