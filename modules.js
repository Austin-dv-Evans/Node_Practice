/* core modules or built-in moudle
core moudles are a set of built-in moudles or functions which 
you use without any further installation 

local module = local, personally created modules in your node.js application

core module
to include any module use the require() function with the name of that module
This gives your application the access to the specific module
ex 
*/
var http = require("http");


// creating a local module use export keyword for creating
//properties that are not present inside

export.myDateTime = function(){
   return Date();
}