import * as Defines from "../Core/Defines.js"

const SceneBase = require("SceneBase");

export var SceneGamePlay = cc.Class(
{
    extends : SceneBase,

    properties :
    {
    },


    // LIFE-CYCLE CALLBACKS:


    /**
     * 객체를 불러왔을 때의 처리
     */
    onLoad : function()
    {

    },

    /** 
     * 시작 시점에서의 처리
     */
    start : function()
    {
    },

    /**
     * 매 프레임 업데이트 단계에서의 처리
     * @param {number} deltaTime
     */
    update : function(deltaTime)
    {
    },

    /**
     * 매 프레임의 마지막 단계에서의 처리
     */
    lateUpdate : function()
    {
    },

    /**
     * 객체가 파괴될 때의 처리
     */
    onDestroy : function()
    {
    }
});
