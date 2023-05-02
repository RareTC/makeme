const Markdown = require('../../models/markdown');

module.exports = {
    saveMarkdown
}

async function saveMarkdown(req, res) {
    try {
        const markdown = await Markdown.findOne({ user: req.body._id, markdown: req.body.text, title: req.body.markdownTitle });
        console.log(markdown, 'on the back')
    } catch(err) {
        console.log('backend err')
    }
}