//  import json-server
const jsonserver = require('json-server');
// create server
const mediaplayerserver = jsonserver.create()
// create a middleware to parse the json data
const middleware = jsonserver.defaults()
// path to store the data
const routes = jsonserver.router('db.json');
// Tell the server to use the middleware and routes
mediaplayerserver.use(middleware)
mediaplayerserver.use(routes)
// set a port 
PORT = 4000||process.env.PORT   //This chooses the available port
// run the server
mediaplayerserver.listen(PORT,()=>{
   console.log(`server running successfully at the port number ${PORT}`);
})