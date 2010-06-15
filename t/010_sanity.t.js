StartTest(function(t) {
    
	t.plan(1)
    
    var async0 = t.beginAsync()
    
    use('JooseX.Meta.Parameterized', function () {
        
        //======================================================================================================================================================================================================================================================
        t.diag('Sanity')
        
        t.ok(JooseX.Meta.Parameterized, "JooseX.Meta.Parameterized is here")
        
        t.endAsync(async0)
    })
})    