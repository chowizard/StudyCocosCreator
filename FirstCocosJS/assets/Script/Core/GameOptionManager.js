//const GameManager = require("GameManager");

/** 
 * 게임의 옵션 관리자
 * @type {GameOptionManager}
 */
const GameOptionManager = cc.Class(
{
    extends : cc.Component,


    // statics : () => (
    // {
    //     GameManager :
    //     {
    //         default : null,
    //         type : require("../GameManager")
    //     }
    // }),


    properties :
    {
    },


    // LIFE-CYCLE CALLBACKS:


    onLoad : function()
    {
        console.log("GameDataManager.onLoad()");
    },

    start : function()
    {
        console.log("GameDataManager.start()");
    },

    onDestroy : function()
    {
        console.log("GameDataManager.onDestroy()");
    }
});

export default GameOptionManager;
