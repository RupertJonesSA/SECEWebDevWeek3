const express = require('express');
const router = express.Router();
const path = require('path'); 

router.get('^/$|/index(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'index.html')); // parameters go -> (__dirname, folder, file)
});
// getting 'new-page.html'
// (.html)? makes .html extension optional
router.get('/new-page(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'new-page.html'));
});

router.get('/old-page(.html)?', (req, res) => {
    res.redirect(301, '/new-page.html'); //302 by default, but we want 301 for perm redirect
});

module.exports = router; 