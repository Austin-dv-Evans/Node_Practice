/* core modules or built-in moudle
core moudles are a set of built-in moudles or functions which 
you use without any further installation 

local module = local, personally created modules in your node.js application

core module
to include any module use the require() function with the name of that module
This gives your application the access to the specific module
ex 
*/
// var http = require("http");
// import http from "http";

// creating a local module use export keyword for creating
//properties that are not present inside

/* 
   When we define a function to node it is added to the global scope and can be accessed
   in other files.
   Use modularity where we define variables and functions, encapsulated so they dont
   override other variables or functions 
*/
/* 
In node every file is a module, and the variables and functions defined in that file
are scoped to that module
*/
