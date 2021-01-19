// Three components of Node.js

// import required modules
// create a server
// read requests and return a response

//import required modules - we use the require directive to load Node.js modules

//create a server - a server that will listen to clients requests

// read request, return response - the server created ^^ will read the HTTP request made by the client which can be a browser or a console and return the response

// single threded. Node.js single thread will handle the request of the first client
//and immediately after that will handle another client request and so on without wating

// when the database will prepare the result of any client,
// Node will get to know through the event queue and will
// return the call of that client without waiting for each of them

//best for data intensive applications not CPU intensive applications

/* Node.js is highly scalable because there is no wait for FIle
I/O 
A function to read a file may start reading a file and return the control to the execution environment immediately so that the next instruciton can be executed.

Thanks to nonblocking asynchronous nature

Node is continuously monitoring the event queue to know when the database is ready to 
send the response to the request. while a thread is waiting for the database it servers
another request
*/
