const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const muralSchema = new Schema({
  title: String,
  year: String,
  artist: String,
  location: {
    city: String,
    state: String
  },
  credit: String,
  image: String,
  info: String
});

module.exports = mongoose.model('Mural', muralSchema);

// LINK USER/COMMENT SCHEMA
// -------------------------
  // author: {
  //   id: {
  //     type: Schema.Types.ObjectId,
  //     ref: 'User'
  //   }
  // },
  // description: String,
  // comments: [
  //   {
  //     type: Schema.Types.ObjectId,
  //     ref: 'Comment'
  //   }
  // ]