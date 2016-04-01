var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

app.get('/unibabel-js/index.js', function(req, res){
  res.sendFile(__dirname + '/unibabel-js/index.js');
});

app.get('/unibabel-js/unibabel.hex.js', function(req, res){
  res.sendFile(__dirname + '/unibabel-js/unibabel.hex.js');
});

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});

http.listen(1984, function(){
  console.log('listening on *:1984');
});
