import * as Defines from "../Core/Defines.js"

const SceneBase = require("SceneBase");

cc.Class(
{
    extends : SceneBase,

    properties :
    {
        /**
         * 장면 객체의 타입(override)
         * @param {Defines} sceneType 장면 타입
         */
        sceneType : 
        {
            default : Defines.eSceneType.Intro,
            override : true
        },
    },


    // LIFE-CYCLE CALLBACKS:


    /**
     * 객체를 불러왔을 때의 처리
     */
    onLoad : function()
    {
        console.log("SceneIntro.onLoad()");
    },

    /** 
     * 시작 시점에서의 처리
     */
    start : function()
    {
        console.log("SceneIntro.start()");

        let testSprite = this.testSprite;
        cc.loader.loadRes("images/pulsar", cc.SpriteFrame, (error, resource) => 
        {
            testSprite.spriteFrame = resource;
        });
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
        console.log("SceneIntro.onDestroy()");
    }
});
