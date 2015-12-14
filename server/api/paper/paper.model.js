'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var PaperSchema = new Schema({
  name: String,
  mfi: String,
  model: String,
  description: String,
  active: { type: Boolean, default: true },
  date: { type: Date, default: Date() }

});

module.exports = mongoose.model('Paper', PaperSchema);