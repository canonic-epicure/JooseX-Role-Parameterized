StartTest(function(t) {
    
	t.plan(1)
    
    var async0 = t.beginAsync()
    
    use('JooseX.Meta.Parameterized', function () {
        
        //======================================================================================================================================================================================================================================================
        t.diag('Sanity')
        
        t.ok(JooseX.Meta.Parameterized, "JooseX.Meta.Parameterized is here")
        
        Role.Parameterized('RoleName', function (param1, param2, ...) {
        
            var methods = param1 == param2 ? {
                method : function (p1) {
                    ...
                }
            } : {
                method : function (p1, p2) {
                    ...
                }
            }
        
            return Role({
                methods : methods
            })
        
        })
        
        Class('Parameterized.Class', {
        Role('Parameterized.Role', {
            
            trait : JooseX.Meta.Parameterized,
            
            use : 'Some.Thing',
            
        role : function (self, consumer) {
            
            var methods = param1 == param2 ? {
                method : function (p1) {
                    ...
                }
            } : {
                method : function (p1, p2) {
                    ...
                }
            }
        
            return Role({
                methods : methods
            })
            
        }})
        
        
        Class('ClassName', {
        
            does : [ Parameterized.Role(value1, value2) ]
        
        })         
        
        var parameterizedClass = Parameterized.Class(value1, value2)
        
        
        t.endAsync(async0)
    })
})    