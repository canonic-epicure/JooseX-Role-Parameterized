Class('JooseX.Role.Parameterized.Initializer', {
    
    meta    : Joose.Meta.Class,
    
    isa     : Joose.Meta.Class,
    
    
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
        
        before : {
            
            preApply : function (targetClass) {
                
                
            }            
        }
    },
    
        
    methods : {
        
        getComposeInfo : function () {
        }
    }  
})