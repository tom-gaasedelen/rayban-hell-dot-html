var express = require("express") //use the express js framework to serve out html files (handle request and response on the server)
var app = express(); //starts express running
var server = require("http").Server( app ) //start a server instance on a port
var io = require('socket.io')(server) // use socket.io for the real time connections aka. wesockets


server.listen(3000, function(){ // set up a server on port 3000, do a callback when it started successfully
  console.log("server started on 3000");
})

app.use( express.static('public') ) //server out everything that is in the public folder

var storedPositions = [];



io.on('connection', function(socket){ // if socket.io sees a new connection, do something with them...
  console.log(socket.id) //prints out the socket that connected (ie all users + the projection)

  io.emit('storedPositionsMessage', storedPositions);


  socket.on('addRectangle', function(data){ //look for any messages with the 'addRectangle'
    console.log('addRectangle' + data); //log out the 'data' , in this case you get true, but you could use this to get any arbitrary data you want, think position, color, etc.
    io.emit('projectionRectangle', data); // send out a message to the projection to add a rect to the screen

    storedPositions.push(data);
  })


  socket.on('likeMessage', function(data){ //same as above, just a different message name.
    io.emit('projectionLike', data)
  })



  socket.on('commentMessage', function(data){
    io.emit('projectionComment', data)

  })

  socket.on('shareMessage', function(data){
    io.emit('projectionShare', data)

  })


})
