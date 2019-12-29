//const GameManager = require("GameManager");

/** 
 * 장면 관리자 객체
 * @type {SceneManager}
 */
const SceneManager = cc.Class(
{
    extends : cc.Component,


    // statics : 
    // {
    //     get :
    //     {
    //         get : function()
    //         {
    //             return GameManager.singleton;
    //         }
    //     }
    // },


    properties :
    {
    },


    // LIFE-CYCLE CALLBACKS:


    onLoad : function()
    {
        console.log("SceneManager.onLoad()");
    },

    start : function()
    {
        console.log("SceneManager.start()");
    },

    onDestroy : function()
    {
        console.log("SceneManager.onDestroy()");
    }
});

export default SceneManager;
