StartTest(function(t) {
    
	t.plan(9)
    
    var async0 = t.beginAsync()
    
    use('JooseX.Role.Parameterized', function () {
        
        //======================================================================================================================================================================================================================================================
        t.diag('Sanity')
        
        t.ok(JooseX.Role.Parameterized, "JooseX.Role.Parameterized is here")
        
        
        Role('SomeTrait')
        

        Role('Parameterized.Role', {
            
            meta : JooseX.Role.Parameterized,
            
            has : {
                param : null
            },
            
            
        role : function (self) {
            
            t.ok(self == this, '`role` function is being called as the method of the parameter instance')
            
            var methods = {}
            
            if (this.param == 'value1')     methods.append = function (p1) { return p1 + '1' }
            if (this.param == 'value2')     methods.append = function (p1) { return p1 + '2' }
        
            return {
                trait   : SomeTrait,
                
                methods : methods
            }
        }})
        
        
        Class('ClassName1', {
            does : Parameterized.Role({ param : 'value1' })
        })
        
        t.ok(ClassName1.meta.meta.does(SomeTrait), 'ClassName1 receieved a trait')
        t.ok(ClassName1.meta.hasMethod('append'), 'ClassName1 received an `append` method')
        
        var class1 = new ClassName1()
        
        t.ok(class1.append(1) == '11', '.. and it works correctly')

        
        
        Class('ClassName2', {
            does : Parameterized.Role({ param : 'value2' })
        })
        
        t.ok(ClassName2.meta.meta.does(SomeTrait), 'ClassName2 receieved a trait')
        t.ok(ClassName2.meta.hasMethod('append'), 'ClassName2 received an `append` method')
        
        var class2 = new ClassName2()
        
        t.ok(class2.append(1) == '12', '.. and it works correctly')
        
        
        t.endAsync(async0)
    })
})    