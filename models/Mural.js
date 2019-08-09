const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const muralSchema = new Schema({
  title: String,
  artist: String,
  location: String,
  image: String,
  author: {
    id: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    }
  },
  description: String,
  comments: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Comment'
    }
  ]
});

module.exports = mongoose.model('Mural', muralSchema);