enum eCharacterClass
{
    Unknown = 0,
    Worrior = 1,
    Archer = 2,
    Wizard = 3,
}


const { ccclass, property } = cc._decorator;

@ccclass
export default class GameManager extends cc.Component
{
    @property(cc.Label)
    label: cc.Label = null;

    @property
    text: string = 'hello';

    // LIFE-CYCLE CALLBACKS:

    /**
     * @summary 객체 생성 단계의 처리
     */
    onLoad()
    {

    }

    /**
     * @summary 객체 시작 처리
     */
    start()
    {
        let age : number = 37;
        let testText : string = 
`Hello,
My name is Jo Soowoon.
I'm ${age} years old.`;
        console.log(testText);

        let characterClass : eCharacterClass = eCharacterClass.Archer;
        console.log("GameManager.start() : CharacterClass = " + eCharacterClass[characterClass]);
    }

    /**
     * @description 매 프레임 업데이트 처리
     * @param deltaTime 
     */
    update(deltaTime : number)
    {
    }
}

//function testFunction(arg1 : number, arg2 : string, arg3 : any)
//{
//
//}
