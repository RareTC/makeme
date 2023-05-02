const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const markdownSchema = new Schema({
  title: String,
  markdown: String,
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
}, {
  timestamps: true,
});

module.exports = mongoose.model('Markdown', markdownSchema);