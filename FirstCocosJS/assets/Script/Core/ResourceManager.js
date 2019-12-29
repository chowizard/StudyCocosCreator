/** @module ResourceManager */

//import GameManager from "../GameManager";
/** @type {GameManager} */
let GameManager;

/** 
 * 게임에서 사용하는 리소스 에셋 데이터들의 관리자
 * 
 * @class
 */
const ResourceManager = cc.Class(
{
    extends : cc.Component,


    statics : 
    {
        get : function()
        {
            //GameManager = require("../GameManager").default;
            return GameManager.singleton().resourceManager;
        }
    },

    // statics : () => (
    // {
    //     GameManager :
    //     {
    //         default : null,
    //         type : require("../GameManager")
    //     },

    //     get : function()
    //     {
    //         return GameManager.singleton.resourceManager;
    //     }
    // }),

    properties :
    {
        testValue : 
        {
            default : 100,
            type : cc.Integer,
        }
    },

    // properties : () => 
    // {
    //     return {
    //         GameManager :
    //         {
    //             default : null,
    //             type : require("GameManager")
    //         }
    //     };
    // },

    // properties: () => ({    // <- brackets "(" on the right side of the arrows can not be omitted
    //     game: {
    //         default: null,
    //         type: require("Game")
    //     }
    // }),


    // LIFE-CYCLE CALLBACKS:


    onLoad : function()
    {
        console.log("ResourceManager.onLoad()");
    },

    start : function()
    {
        console.log("ResourceManager.start()");

        console.log("Test Value = " + GameManager.singleton.testValue);
        //console.log("Test Value = " + GameManager._singleton.testValue);
    },

    onDestroy : function()
    {
        console.log("ResourceManager.onDestroy()");
    }
});

export default ResourceManager;

GameManager = require("../GameManager");
