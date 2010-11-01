var Harness
var isNode        = typeof process != 'undefined' && process.pid

if (isNode) {
    require('Task/Test/Run/NodeJSBundle')
    
    Harness = Test.Run.Harness.NodeJS
} else 
    Harness = Test.Run.Harness.Browser.ExtJS
        
    
var INC = (isNode ? require.paths : []).concat('../lib', '/jsan')


Harness.configure({
    title     : 'JooseX.Class.SimpleConstructor Test Suite',
    
    preload : [
        "jsan:Task.Joose.Core",
        "jsan:Task.JooseX.Namespace.Depended.Auto",
        {
            text : "JooseX.Namespace.Depended.Manager.my.INC = " + Harness.prepareINC(INC)
        }
    ]
})


Harness.start(
    '010_sanity.t.js',
    '020_basics.t.js',
    '030_introspection.t.js'
)

