const express = require('express');
const router = express.Router();

router.get('', (req, res) => {
  const locals = {
    title: 'Dev Diary',
    description: 'This is my dev diary yo!',
  };

  res.render('index', { locals });
});

router.get('/about', (req, res) => {
  res.render('about');
});

module.exports = router;
