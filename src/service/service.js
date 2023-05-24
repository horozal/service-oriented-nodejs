const express = require('express');
const service = express();

service.get('/service', function (req, res) {
  res.send('A service');
});

const port = 3000;
app.listen(port, function () {
  console.log('Service running on port port');
});
