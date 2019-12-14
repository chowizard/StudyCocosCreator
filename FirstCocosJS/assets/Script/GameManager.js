const SceneManager = require("SceneManager");

export let GameManager = cc.Class(
{
    extends : cc.Component,

    properties :
    {
        /** 장면 관리자 */
        sceneManager :
        {
            defualt : null,
            type : SceneManager,
            tooltip : "장면 관리자",

            get : function()
            {
                return this._sceneManager;
            },

            set : function(value)
            {
                if((value === undefined) || (value === null))
                    console.error("GameManager.sceneManager : value is invalid!");

                this._sceneManager = value;
            }
        },


    },


    // LIFE-CYCLE CALLBACKS:


    /**
     * 객체를 불러왔을 때의 처리
     */
    onLoad : function()
    {
        console.log("GameManager.onLoad()");
    },

    /** 
     * 시작 시점에서의 처리
     */
    start : function()
    {
        console.log("GameManager.start()");
    },

    /**
     * 객체가 파괴되는 시점에서의 처리
     */
    onDestroy : function()
    {
        console.log("GameManager.onDestroy()");
    }
});
