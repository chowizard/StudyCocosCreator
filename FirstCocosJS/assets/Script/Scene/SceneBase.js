import * as Defines from "../Core/Defines.js"

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
