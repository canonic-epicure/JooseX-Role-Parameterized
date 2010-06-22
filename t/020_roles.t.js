StartTest(function(t) {
    
	t.plan(1)
    
    var async0 = t.beginAsync()
    
    use('JooseX.Meta.Parameterized', function () {
        
        //======================================================================================================================================================================================================================================================
        t.diag('Sanity')
        
        t.ok(JooseX.Meta.Parameterized, "JooseX.Meta.Parameterized is here")
        

        Role('Parameterized.Role', {
            
            meta : JooseX.Meta.Parameterized,
            
            has : {
                param : null
            },
            
            
        role : function (self, consumer) {
            
            t.ok(self == this, '`role` function is being called as the method of the parameter instance')
            
            var methods = {}
            
            if (this.param == 'value1')     methods.append = function (p1) { return p1 + '1' }
            if (this.param == 'value2')     methods.append = function (p1) { return p1 + '2' }
        
            return Role({
                methods : methods
            })
        }})
        
        
        Class('ClassName1', {
            does : Parameterized.Role({ param : 'value1' })
        })         

        
        Class('ClassName2', {
            does : Parameterized.Role({ param : 'value2' })
        })         
        
        t.endAsync(async0)
    })
})    