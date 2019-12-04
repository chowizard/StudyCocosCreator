"use strict";

// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class(
{
    extends: cc.Component,

    properties:
     {
        // foo: {
        //     // ATTRIBUTES:
        //     default: null,        // The default value will be used only when the component attaching
        //                           // to a node for the first time
        //     type: cc.SpriteFrame, // optional, default is typeof default
        //     serializable: true,   // optional, default is true
        // },
        // bar: {
        //     get () {
        //         return this._bar;
        //     },
        //     set (value) {
        //         this._bar = value;
        //     }
        // },

        life : 0,

        mana : 0,

        isAttack : false,

        items : 
        {
            default : [],
            type : [cc.Integer]
        },
    },

    maxlife : 0,

    maxmana : 0,

    // LIFE-CYCLE CALLBACKS:

    // Unity GameObject.Awake()
    onLoad : function()
    {

    },

    // Unity GameObject.Start()
    start : function()
    {
        console.log("Character.start()");
    },

    // Unity GameObject.Update()
    update : function(dt)
    {
    },

    addItems : function()
    {
        
    }
});
