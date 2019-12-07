cc.Class(
{
    extends : cc.Component,

    properties :
    {
        label :
        {
            default: null,
            type: cc.Label
        },
        
        // defaults, set visually when attaching this script to the Canvas
        text : 'Hi, there',

        

        player : 
        {
            default : null,
            type : cc.Node
        }
    },

    // use this for initialization
    onLoad: function () 
    {
        this.label.string = this.text;

        console.log("cc.onLoad()");

        this.testFunction();
    },

    start : function()
    {
    },

    // called every frame
    update : function (dt)
    {
    },

    testFunction : function ()
    {
        console.info("cc.testFunction()");

        for(var index = 0; index < 10; ++index)
        {
            ++index;
        }
        //alert(index);
    },

    addItems : function()
    {
        
    }
});
