Class('JooseX.Role.Parameterized.Initializer', {
    
    meta    : Joose.Meta.Class,
    
    isa     : Joose.Meta.Role,
    
    
    has : {
        initializer        : null
    },
    
        
    builder : {
        
        methods : {
            
            initializer : function (meta, initializer) {
                meta.initializer = initializer
            }
        }
    
    },
    
    
    stem : {
        
        // this will cause the role to remain open after creation (we need to wait till the application moment)
        has : {
            opened              : 2,
            firstConsumption    : true
        },
        
        
        methods : {
            
            beforeConsumedBy : function (targetStem) {
                debugger
                
                if (this.firstConsumption) {
                    var targetMeta  = this.targetMeta
                    var initializer = targetMeta.initializer
                    var targetClass = targetStem.targetMeta.c
                    
                    targetMeta.extend(initializer.meta.roleFunc.call(initializer, initializer, targetClass))
                    
                    this.close()
                    
                    this.firstConsumption = false
                }
            }            
        }
    }  
})