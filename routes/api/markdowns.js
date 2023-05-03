const express = require('express');
const router = express.Router();
const markdownsCtrl = require('../../controllers/api/markdowns');


router.post('/save', markdownsCtrl.saveMarkdown);

module.exports = router; 