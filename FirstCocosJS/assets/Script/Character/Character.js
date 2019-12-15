/**
 * 캐릭터 개체를 나타내는 클래스
 * 
 * - 이 클래스는 캐릭터의 기본적인 정보와 데이터들을 소유하고 있다.
 * 
 * - 구체적인 기능들은 CharacterComponent를 상속받아 구현하는, 각 기능별 컴포넌트 클래스들이 담당한다.
 * 
 * - 캐릭터는 기능에 따라 여러 개의 CharacterComponent 객체를 소유한다.
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
        console.log("Character.onLoad()");
    },

    start : function()
    {
        console.log("Character.start()");
    },

    update : function(deltaTime)
    {
    },

    lateUpdate : function()
    {

    },

    onDestory : function()
    {
        console.log("Character.onDestroy()");
    }
});
