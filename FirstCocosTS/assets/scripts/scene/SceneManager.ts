import GameManager from "../GameManager"

const {ccclass, property} = cc._decorator;

@ccclass
export default class SceneManager extends cc.Component
{
    private static get() : SceneManager
    {
        return GameManager.singleton.sceneManager;
    }


    @property
    public testString : string = "Hello"


    // LIFE-CYCLE CALLBACKS:


    protected onLoad()
    {

    }

    protected start()
    {
        GameManager.singleton.testValue = 200;
        console.log("[GameManager Test Value] = " + GameManager.singleton.testValue);
    }

    // update (dt) {}
}
