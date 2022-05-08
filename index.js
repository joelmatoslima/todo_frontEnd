const app = require('express')();
const http = require('http').createServer(app);

const io = require('socket.io')(http, {
  cors: {
    origins: ['http://localhost:8080']
  }
});



const port = 3000
const cors = require('cors')
// getting-started.js

// app.use(express.urlencoded()); //Parse URL-encoded bodies
// app.use(express.urlencoded({ extended: true }))
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())

const lisrUsers = [

 




]


app.get('/', (req, res) => {
  // res.send('<h1>Hey Socket.io</h1>');
  res.json(lisrUsers)

});

app.post('/add-status', (req, res) => {
  const user = req.body

  console.log(user.status);

  const found = lisrUsers.find(item => item.id == user.id);

  // console.log(found);


  if (!found) {
    lisrUsers.push(user)
    console.log(lisrUsers);

  } else {
    found.status = user.status

    console.log(lisrUsers);
  }



  res.json({
    message: "Status atualizado",
    status: lisrUsers
  })

});



io.on('connection', (socket) => {
  console.log('a user connected');

  socket.emit("allUsers", lisrUsers)


  socket.on('add-status', (msg) => {
    console.log('add-status: ' + msg);
    console.log(msg);



    const user = msg

    console.log(user.status);

    const found = lisrUsers.find(item => item.id == user.id);

    // console.log(found);


    if (!found) {
      lisrUsers.push(user)
      console.log(lisrUsers);

    } else {
      found.status = user.status

      console.log(lisrUsers);
    }

    io.emit("allUsers", lisrUsers)









  });









  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});







http.listen(port, () => {
  console.log('listening on *:' + port);
});
