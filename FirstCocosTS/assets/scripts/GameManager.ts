import SceneManager from "./scene/SceneManager"

const {ccclass, property} = cc._decorator;

@ccclass
export default class GameManager extends cc.Component
{
    private static _singleton : GameManager = null;

    public static get singleton()
    {
        return GameManager._singleton;
    }


    @property
    protected _sceneManager : SceneManager = null;

    @property(
    {
        type : SceneManager
    })
    public get sceneManager() : SceneManager
    {
        return this._sceneManager;
    }
    
    public set sceneManager(value)
    {
        this._sceneManager = value;
    }


    @property
    public testValue : number = 100;

    
    // LIFE-CYCLE CALLBACKS:


    protected onLoad()
    {
        GameManager._singleton = this;
    }

    protected start()
    {
        this.sceneManager.testString = "How are you?";
        console.log("[SceneManager Test String] = " + this.sceneManager.testString);
    }
}
