const express = require('express');
const router = express.Router();
const ensureLoggedIn = require('../../config/ensureLoggedIn');
const markdownsCtrl = require('../../controllers/api/markdowns');


router.post('/save', ensureLoggedIn, markdownsCtrl.saveMarkdown);

router.get('/saved', ensureLoggedIn, markdownsCtrl.getAllForUser);

router.delete('/:id', ensureLoggedIn, markdownsCtrl.deleteMarkdown);


module.exports = router; 