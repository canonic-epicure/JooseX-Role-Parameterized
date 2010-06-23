StartTest(function(t) {
    
    t.plan(10)
    
    var async0 = t.beginAsync()
    
    use('JooseX.Role.Parameterized', function () {
        
        //======================================================================================================================================================================================================================================================
        t.diag('Sanity')
        
        t.ok(JooseX.Role.Parameterized, "JooseX.Role.Parameterized is here")
        
        var log = []
        

        Role('Parameterized.Role', {
            
            meta : JooseX.Role.Parameterized,
            
            parameter : {
                regex   : null
            },
            
            introspect : true,
            
            
        role : function (self, consumer) {
            
            t.ok(self == this, '`role` function is being called as the method of the parameter instance')
            
            var role = {
                override : {}
            }
            
            consumer.meta.getMethods().each(function (method, name) {
                
                if (self.regex.test(name)) role.override[ name ] = function () {
                    log.push('override [' + name + '] - before')
                    
                    var res = this.SUPERARG(arguments)
                    
                    log.push('override [' + name + '] - after')
                    
                    return res
                }
            })
            
            return Role(role)
        }})
        
        
        Class('ClassName', {
            
            does : Parameterized.Role({ regex : /^doT.+/ }),
            
            methods : {
                
                doThis : function () {
                    return 'this'
                },
                
                doThat  : function () {
                    return 'that'
                }
            }
        })
        
        var instance = new ClassName()
        
        t.ok(instance, '`ClassName` was instantiated')
        
        t.ok(instance.doThis() == 'this', '`doThis` method works as expected')
        t.ok(instance.doThat() == 'that', '`doThat` method works as expected')
        
        t.ok(log.length == 4, 'Correct log received')
        
        t.ok(log[0] == 'override [doThis] - before', 'Override is correct #1')
        t.ok(log[1] == 'override [doThis] - after', 'Override is correct #2')
        t.ok(log[2] == 'override [doThat] - before', 'Override is correct #3')
        t.ok(log[3] == 'override [doThat] - after', 'Override is correct #4')
        

        
        t.endAsync(async0)
    })
})    