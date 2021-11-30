const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    title: 'WeBuilder',
    description: 'An Easy-to-use Portfolio Builder for Computer Scientist',
  });
});


module.exports = router;