/** 
 * 캐릭터의 특정 기능을 담당하는 컴포넌트 (스킬)
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
        console.log("CharacterSkill.onLoad()");
    },

    start : function()
    {
        console.log("CharacterSkill.start()");
    },

    update : function(deltaTime)
    {
    },

    lateUpdate : function()
    {
    },

    onDestory : function()
    {
        console.log("CharacterSkill.onDestroy()");
    }
});
