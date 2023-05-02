const express = require('express');
const router = express.Router();


router.post('/save', markdownsCtrl.saveMarkdown);

module.exports = router; 