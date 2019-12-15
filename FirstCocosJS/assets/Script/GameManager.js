const ResourceManager = require("ResourceManager");
const GameDataManager = require("GameDataManager");
const GameOptionManager = require("GameOptionManager");
const SceneManager = require("SceneManager");
const StageManager = require("StageManager");
const SoundManager = require("SoundManager");
const UiManager = require("UiManager");

/** 
 * 게임 전체의 관리자 객체
 * 
 * - 게임 애플리케이션은 반드시 이 관리자를 가장 먼저 호출하도록 구현하여야 한다.
 * 
 * - 이 클래스와 이 클래스가 직접 소유하고 있는 객체들은 게임의 시작 -> 종료 시점까지 해제하지 말아야 한다.
 * : 게임 관리자가 소유하고 있는 하위 객체들의 내부 기능들은 필요에 따라 반드시 그렇지 않을 수 있다.
 * 
 * - 게임 관리자는 게임 애플리케이션의 언제 어느 시점에든 전역적으로 접근할 수 있는 인터페이스를 제공하여야 한다.
 */
cc.Class(
{
    extends : cc.Component,


    // statics : 
    // {
    //     /** 싱글톤 인스턴스 */
    //     _singleton : null,

    //     /** 싱글톤 인스턴스 획득 */
    //     singleton : function()
    //     {
    //         return this.statics._singleton;
    //     }
    // },


    properties :
    {
        /** 리소스 데이터 관리자 */
        resourceManager : 
        {
            default : null,
            type : ResourceManager,
            tooltip : "리소스 데이터 관리자"
        }, 

        /** 게임 데이터 관리자 */
        gameDataManager : 
        {
            default : null,
            type : GameDataManager,
            tooltip : "게임 데이터 관리자"
        },

        /** 게임 옵션 관리자 */
        gameOptionManager : 
        {
            default : null,
            type : GameOptionManager,
            tooltip : "게임 옵션 관리자"
        }, 

        /** 장면 관리자 */
        sceneManager :
        {
            default : null,
            type : SceneManager,
            tooltip : "장면 관리자"
        },

        /** 스테이지 관리자 */
        stageManager : 
        {
            default : null,
            type : StageManager,
            tooltip : "스테이지 관리자"
        },

        /** 사운드 객체 관리자 */
        soundManager : 
        {
            default : null,
            type : SoundManager,
            tooltip : "사운드 객체 관리자"
        },

        /** UI 관리자 */
        uiManager : 
        {
            default : null,
            type : UiManager,
            tooltip : "UI 관리자"
        }
    },


    // LIFE-CYCLE CALLBACKS:


    /**
     * 객체를 불러왔을 때의 처리
     */
    onLoad : function()
    {
        console.log("GameManager.onLoad()");

        this.statics._singleton = this;
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
