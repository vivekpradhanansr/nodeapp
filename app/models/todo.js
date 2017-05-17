var mongoose = require('mongoose');

var schema = new mongoose.Schema({ title: 'string',  tags: 'string'});
module.exports = mongoose.model('todos', schema);
