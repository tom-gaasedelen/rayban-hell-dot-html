var socket = io.connect() //connect to the server

  socket.on('connect', function(data){
    console.log("connected to the server" + socket.id); //when connected, do something

})



$('.bait').click(function(e){ //on click, do something

  console.log(e);

  $('<div>😎</div>').css({
    'position':'absolute',
    'top': e.clientY,
    'left' : e.clientX
  }).appendTo('body')

  var dataToSend = {
    'top': e.clientY,
    'left' : e.clientX


  }

  socket.emit('addRectangle', dataToSend) //send out a message of addRectangle to the server, it will handle the details

})

$('#like').click(function(e){ //on click, do something

  socket.emit('likeMessage', true) //send out a message of addRectangle to the server, it will handle the details

})

$('#comment').click(function(e){ //on click, do something

  socket.emit('commentMessage', true)

})

$('#share').click(function(e){ //on click, do something

  socket.emit('shareMessage', true)

})
