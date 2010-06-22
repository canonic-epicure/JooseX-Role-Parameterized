StartTest(function(t) {
    
	t.plan(1)
    
    var async0 = t.beginAsync()
    
    use('JooseX.Role.Parameterized', function () {
        
        //======================================================================================================================================================================================================================================================
        t.diag('Sanity')
        
        t.ok(JooseX.Role.Parameterized, "JooseX.Role.Parameterized is here")
        
        t.endAsync(async0)
    })
})    