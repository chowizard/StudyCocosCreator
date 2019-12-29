/** @module GameManager */

/** 
 * 게임 전체의 관리자 객체
 * 
 * - 게임 애플리케이션은 반드시 이 관리자를 가장 먼저 호출하도록 구현하여야 한다.
 * 
 * - 이 클래스와 이 클래스가 직접 소유하고 있는 객체들은 게임의 시작 -> 종료 시점까지 해제하지 말아야 한다.
 * : 게임 관리자가 소유하고 있는 하위 객체들의 내부 기능들은 필요에 따라 반드시 그렇지 않을 수 있다.
 * 
 * - 게임 관리자는 게임 애플리케이션의 언제 어느 시점에든 전역적으로 접근할 수 있는 인터페이스를 제공하여야 한다.
 * 
 * @class
 */
const GameManager = cc.Class(
{
    extends : cc.Component,


    statics : 
    {
        /**
         * 싱글톤 인스턴스 
         * @static
         * @private
         * @type {GameManager} 
         */
        _singleton : null,

        /**
         * 싱글톤 인스턴스 획득
         * @static
         * @public
         * @returns GameManager
         */
        singleton : function()
        {
            return GameManager._singleton;
        }
    },


    properties : 
    {
        /** 
         * 리소스 데이터 관리자
         * @public
         * @type {ResourceManager}
         */
        resourceManager : 
        {
            default : null,
            type : require("./Core/ResourceManager"),
            tooltip : "리소스 데이터 관리자"
        }, 

        /**
         * 게임 데이터 관리자
         * @public
         * @type {GameDataManager}
         */
        gameDataManager : 
        {
            default : null,
            type : require("./GameData/GameDataManager"),
            tooltip : "게임 데이터 관리자"
        },

        /**
         * 게임 옵션 관리자
         * @public
         * @type {GameOptionManager}
         */
        gameOptionManager : 
        {
            default : null,
            type : require("./Core/GameOptionManager"),
            tooltip : "게임 옵션 관리자"
        }, 

        /**
         * 장면 관리자
         * @public
         * @type {SceneManager}
         */
        sceneManager :
        {
            default : null,
            type : require("./Scene/SceneManager"),
            tooltip : "장면 관리자"
        },

        /**
         * 스테이지 관리자
         * @public
         * @type {StageManager}
         */
        stageManager : 
        {
            default : null,
            type : require("./Stage/StageManager"),
            tooltip : "스테이지 관리자"
        },

        /**
         * 사운드 객체 관리자
         * @public
         * @type {SoundManager}
         */
        soundManager : 
        {
            default : null,
            type : require("./Sound/SoundManager"),
            tooltip : "사운드 객체 관리자"
        },

        /**
         * UI 관리자
         * @public
         * @type {UiManager}
         */
        uiManager : 
        {
            default : null,
            type : require("./Ui/UiManager"),
            tooltip : "UI 관리자"
        },

        /** @type {number} */
        testValue : 100
    },


    /**
     * 객체를 불러왔을 때의 처리
     * @returns void
     */
    onLoad : function()
    {
        console.log("GameManager.onLoad()");

        GameManager._singleton = this;

        this.test
        cc.log("Singleton Value = " + GameManager.singleton().testValue);
        //cc.log("Singleton Value = " + GameManager._singleton.testValue);
    },

    /** 
     * 시작 시점에서의 처리
     * @protected
     * @returns void
     */
    start : function()
    {
        console.log("GameManager.start()");

        this.resourceManager
        console.log("[This] = " + typeof this + "    [Test Value] = " + this.testValue);
        //console.log("[Test Value] = " + this.resourceManager.testValue);
    },

    /**
     * 객체가 파괴되는 시점에서의 처리
     */
    onDestroy : function()
    {
        console.log("GameManager.onDestroy()");
    }
});

export default GameManager;
