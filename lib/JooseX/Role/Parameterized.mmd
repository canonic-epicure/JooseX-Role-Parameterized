Name
====

JooseX.Role.Parameterized - Implementation of parameterized roles for Joose 


SYNOPSIS
========

        Role('Logger', {
            meta : JooseX.Role.Parameterized,
            
            parameter : {
                logMethodsMatching   : null
            },
            
            introspect : true,
            
            
        role : function (self, consumer) {
            // self == this here
            
            var role = {
                override : {}
            }
            
            consumer.meta.getMethods().each(function (method, name) {
                
                if (self.logMethodsMatching.test(name)) role.override[ name ] = function () {
                    console.log('Call to method [' + name + '] - with arguments [' + arguments + ']')
                    
                    var res = this.SUPERARG(arguments)
                    
                    console.log('Returned result [' + res + ']')
                    
                    return res
                }
            })
            
            return role
        }})
        
        
        Class('ClassName', {
            
            does : Logger({ logMethodsMatching : /^doT.+/ }),
            
            methods : {
                
                dontLogMe : function () {
                    ...
                },
                
                doThis : function () {
                    return 'this'
                },
                
                doThat  : function () {
                    return 'that'
                }
            }
        })
        
        
MOTIVATION
==========

Roles are composable units of behavior. They are useful for factoring out functionality common to many classes from 
any part of your class hierarchy. See [Joose.Manual.Role](http://openjsan.org/go/?l=Joose.Manual.Roles) for an 
introduction to Roles in Joose.

While combining roles affords you a great deal of flexibility, individual roles have very little in the way of 
configurability. Core Joose provides `alias` for renaming methods and `exclude` for ignoring methods. 
These options are primarily (perhaps solely) for resolving role conflicts.

Because roles serve many different masters, they usually provide only the least common denominator of functionality. 
To empower roles further, more configurability than alias and excludes is required. Perhaps your role needs to know 
which method to call when it is done. Or what default value to use for its `url` attribute, etc.

Parameterized roles offer a solution to these (and other) kinds of problems.


USAGE
=====

Declaration
-----------

To declare a parameterized role, specify the `JooseX.Role.Parameterized` as a metaclass for it (see Synopsis above).

This metaclass provides the following additional builders:

### role

This builder accepts a function, which should calculate the actual role and return it. The 1st argument to this function
will be an initializer instance, containing parameters provided during consumption. This function will be also called
in its scope (`this` will be equal to initializer instance as well), so you can treat it as a method of initializer.

        role : function (self, consumer?) {
            // self == this
            
            if (self.someParameter) ...
            
            if (this.anotherParameter) ...
        }


Depending from `introspect` builder, this function can also receive a 2nd argument, which will contain a class, consuming
this role.

The returning value from this function can be an anonymous Role or just the config object which will be passed to `Role` helper
automatically.

        role : function (self) {
            return {
                trait   : SomeTrait,
                
                methods : methods
            }
        }
        
        // or

        role : function (self) {
            return Role({
                trait   : SomeTrait,
                
                methods : methods
            })
        }
  

### parameter
 
Declares a parameter for role. Acts exactly as usual `has` builder (its just an alias actually). 
Parameterized roles can declare arbitrary parameters, which can be provided during consumption.


### introspect

A boolean value, indicating, whether the role needs to introspect the consuming class. Defaults to **false**.

When this parameter is `false`, the role will be calculated immediately (before the consuming class will be created), 
and consuming class won't be passed into `role` function. Such role *can* contain traits.

When this parameter is `true`, the role calculation will be deferred as much as possible, allowing you to introspect
the consuming class. The traits from such role *will be ignored* (as the class was already created at this stage). 

**NOTE**: During role calculation, the consuming class will only contain properties, defined in itself (or its superclasses). 
The properties provided from roles aren't consumed yet on this stage.


Consumption
-----------

To consume a parameterized role, just use its constructor with the parameters provided as during class instantiation:

        Class('ClassName', {
            
            does : Logger({ logMethodsMatching : /^doT.+/ })
        })
        
Compare with static roles consumption:        
        
        Class('ClassName', {
            
            does : Logger
        })


MUTABILITY
==========

Currently, parameterized role won't be re-calculated when consuming class mutates. It will keep the state of the 1st
consumption. This may change in future versions.



GETTING HELP
============

This extension is supported via github issues tracker: <http://github.com/SamuraiJack/JooseX-Role-Parameterized/issues>

For general Joose questions you can also visit [#joose](http://webchat.freenode.net/?randomnick=1&channels=joose&prompt=1) 
on irc.freenode.org or the forum at: <http://joose.it/forum>
 


SEE ALSO
========

Web page of this module: <http://github.com/SamuraiJack/JooseX-Role-Parameterized/>

General documentation for Joose: <http://openjsan.org/go/?l=Joose>


BUGS
====

All complex software has bugs lurking in it, and this module is no exception.

Please report any bugs through the web interface at <http://github.com/SamuraiJack/JooseX-Role-Parameterized/issues>



AUTHORS
=======

Nickolay Platonov <nplatonov@cpan.org>

Heavily based on the original content of MooseX::Role::Parameterized, by Shawn M Moore <sartak@gmail.com>


COPYRIGHT AND LICENSE
=====================

This software is Copyright (c) 2010 by Nickolay Platonov <nplatonov@cpan.org>.

This is free software, licensed under:

  The GNU Lesser General Public License, Version 3, June 2007
