hex = require('hexan');

hex.app.use('/files', express.static(__dirname + '/files'));

hex.app.get('/', (req, res) => {
  res.sendFile(__dirname+'/files/views/index.html');
})

// on connect user
hex.onconnect((socket)=>{

  console.log('connect user');

  socket.on('close-app',()=>{
    hex.close();
  });

});

// on disconnect event
hex.ondisconnect(function (socket) {
  console.log('disconnect user');
});

hex.run(true);
