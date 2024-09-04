const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
});

router.post('/io', (req, res) => {
  res.end("corad" + req.body)
  console.log(req.body)
});

module.exports = router;