'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Room = require('./room');
var Item;

var itemSchema = Schema({
  name: { type: String, required: false },
  value: { type: Number, required: false },
  image: { type: String },
  description: { type: String },
  createdAt: { type: Date, default: new Date() }
});

itemSchema.methods.inRoom = function(cb) {
  Room.findOne({items: this._id}, function(err, room){
    if(err) cb(err);
    cb(null, room)
  });
};

Item = mongoose.model('Item', itemSchema);

module.exports = Item;
