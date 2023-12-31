


const express = require('express');


const app = express();

const port = 3000;

date = new Date()
app.get('/', (req, res) => {
  res.status(200);
  res.send({ "unix": date.getTime(), "utc": date.toUTCString() });
});



app.listen(port, (error) => {
  if (!error)
    console.log("Server is Successfully Running on Port: ", port);
  else
    console.log("Error occurred, server can't start", error);
}
); 