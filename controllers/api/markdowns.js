const Markdown = require('../../models/markdown');

module.exports = {
    saveMarkdown, 
    getAllForUser,
    deleteMarkdown,
}


async function deleteMarkdown(req, res) {
    const markdown = await Markdown.findOneAndDelete({ _id: req.params.id })
    res.json(markdown)
  }
  

async function getAllForUser(req, res) {
    try {
        const markdowns = await Markdown.find({ user:req.user._id}).sort('-createdAt');
        res.json(markdowns);
    } catch(err) {
        res.status(400).json(err);
}
}

async function saveMarkdown(req, res) {
    try {
        const { title, markdown } = req.body;
        const userId = req.user._id;
        let markdownDoc = await Markdown.findOne({ user: userId, title });
        if (markdownDoc) {
            markdownDoc.markdown = markdown;
            await markdownDoc.save();
        } else {
            markdownDoc = await Markdown.create({ title, markdown, user: userId });
        }
        const markdowns = await Markdown.find({ user: userId });
        res.json(markdowns);
    } catch (err) {
        console.log('Error Saving Markdown', err);
        res.status(500).json({ error: 'Error Saving Markdown' });
    }
}