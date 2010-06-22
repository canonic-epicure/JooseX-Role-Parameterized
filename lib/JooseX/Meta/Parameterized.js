Class('JooseX.Meta.Parameterized', {
    
    meta    : Joose.Meta.Class,
    
    isa     : Joose.Meta.Class,
    
    
    builder : {
        
        methods : {
            
            role : function (meta, roleFunc) {
                meta.roleFunc = roleFunc
            }
        }
    
    },
    
    
    has : {
        roleFunc        : null,
        
        forceInstance   : Joose.I.Object
    },
    
        
    methods : {
        
    },
    
    
    override : {
        
        defaultConstructor : function () {
            var meta            = this
            var instanceAnchor  = this.forceInstance
            var previous        = this.SUPER()
            
            this.adaptConstructor(previous)
            
            return function (forceInstance, params) {
                
                if (forceInstance == instanceAnchor) {
                    
                    var paramsInstance = previous.apply(this, params) || this
                    
                    
                }
                
                return new meta.c(instanceAnchor, arguments)
            }
        }        
    }    
    
})