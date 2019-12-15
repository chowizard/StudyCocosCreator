import * as Defines from "../Core/Defines.js"

/** 
 * 게임 애플리케이션의 내용에 따른 장면 구분은 이 객체의 단위에 따라 관리한다.
 * 모든 장면 객체들은 이 클래스를 상속하여 구현하여야 한다.
 */
cc.Class(
{
    extends : cc.Component,

    properties :
    {
        /**
         * 장면 객체의 타입
         * @param {Defines} sceneType 장면 타입
         */
        sceneType : 
        {
            default : Defines.eSceneType.None,
            type : Defines.eSceneType,
            tooltip : "장면 객체의 타입",
            readonly : true
        }
    },


    // LIFE-CYCLE CALLBACKS:
});
