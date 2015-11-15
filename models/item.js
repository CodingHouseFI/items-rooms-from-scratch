'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Item;

var itemSchema = Schema({
  name: { type: String, required: false },
  value: { type: Number, required: false },
  image: { type: String },
  description: { type: String },
  createdAt: { type: Date, default: new Date() }
});

Item = mongoose.model('Item', itemSchema);

module.exports = Item;
